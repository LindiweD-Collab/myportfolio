document.addEventListener('DOMContentLoaded', () => {

    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');

            
            const isExpanded = navMenu.classList.contains('active');
            hamburger.setAttribute('aria-expanded', isExpanded);
        });

        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }


    
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                
                const header = document.querySelector('.header'); 
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                
                 if (navMenu && navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    
    const sections = document.querySelectorAll('.section-padding'); 

    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
       
        section.style.opacity = 0;
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });


    
    const contactForm = document.querySelector('.contact-form'); 
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    
                    input.style.borderColor = 'red';
                } else {
                    
                     input.style.borderColor = 'var(--secondary-color, #ccc)'; 
                }
            });

            if (!isValid) {
                e.preventDefault(); 
                alert('Please fill in all required fields.');
            } else {
                
                console.log('Form submitted (simulation)');
                
            }
        });

         
        contactForm.querySelectorAll('input[required], textarea[required]').forEach(input => {
            input.addEventListener('input', () => {
              
                if(input.style.borderColor === 'red' && input.value.trim()) {
                     input.style.borderColor = 'var(--secondary-color, #ccc)';
                }
            });
        });
    }

    
    if (document.querySelector('.typing-text')) {
        
        if (typeof Typed !== 'undefined') { 
            const typed = new Typed('.typing-text', {
                strings: [
                    'Full Stack Developer', 
                    'Data Analyst',
                    'RPA Enthusiast' 
                ],
                typeSpeed: 60, 
                backSpeed: 40, 
                loop: true,
                backDelay: 2000, 
                showCursor: true,
                cursorChar: '|'
            });
        } else {
            console.error('Typed.js library not loaded.');
        }
    }
    

    
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

       
        gsap.from(".hero-image-wrapper", { 
            scrollTrigger: { 
                trigger: ".hero-section", 
                toggleActions: "play none none none", 
                start: "top 80%" 
            },
            opacity: 0, 
            scale: 0.8, 
            duration: 1, 
            ease: 'power3.out' 
        });

       
        const heroTextTimeline = gsap.timeline({
            scrollTrigger: { 
                trigger: ".hero-section", 
                toggleActions: "play none none none", 
                start: "top 75%" // Start text animation slightly later
            },
            defaults: { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' } 
        });

        
        heroTextTimeline
            .from(".hero-text-content h1", { delay: 0.2 }) 
            .from(".hero-text-content .subtitle", {}, "-=0.6") 
            .from(".hero-text-content .location", {}, "-=0.7") 
            .from(".hero-text-content .tagline", {}, "-=0.7") 
            .from(".hero-buttons", {}, "-=0.6") r
            .from(".social-links > *", { y: 20, stagger: 0.1 }, "-=0.6"); 

    } else {
        console.log("GSAP or ScrollTrigger not loaded - Hero animations skipped.");
    }
    


}); 



