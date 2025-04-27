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
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                if (navMenu && navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    const sections = document.querySelectorAll('.section-padding');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observerCallback = (entries) => {
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
        contactForm.addEventListener('submit', function (e) {
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
                if (input.style.borderColor === 'red' && input.value.trim()) {
                    input.style.borderColor = 'var(--secondary-color, #ccc)';
                }
            });
        });
    }

    if (document.querySelector('.typing-text')) {
        if (typeof Typed !== 'undefined') {
            new Typed('.typing-text', {
                strings: ['Full Stack Developer', 'Data Analyst', 'RPA Enthusiast'],
                typeSpeed: 60, backSpeed: 40, loop: true, backDelay: 2000, showCursor: true, cursorChar: '|'
            });
        } else { console.error('Typed.js library not loaded.'); }
    }

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".hero-image-wrapper", { scrollTrigger: { trigger: ".hero-section", toggleActions: "play none none none", start: "top 80%" }, opacity: 0, scale: 0.8, duration: 1, ease: 'power3.out' });
        const heroTextTimeline = gsap.timeline({ scrollTrigger: { trigger: ".hero-section", toggleActions: "play none none none", start: "top 75%" }, defaults: { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' } });
        heroTextTimeline
            .from(".hero-text-content h1", { delay: 0.2 })
            .from(".hero-text-content .subtitle", {}, "-=0.6")
            .from(".hero-text-content .location", {}, "-=0.7")
            .from(".hero-text-content .tagline", {}, "-=0.7")
            .from(".hero-buttons", {}, "-=0.6")
            .from(".social-links > *", { y: 20, stagger: 0.1 }, "-=0.6");
    } else { console.log("GSAP or ScrollTrigger not loaded - Hero animations skipped."); }

    
    const projectsSlider = () => {
        const sliderWrapper = document.querySelector('.projects-slider-container');
        const projectsGrid = document.querySelector('.projects-grid'); 
        const projectCards = document.querySelectorAll('.project-card');
        const prevButton = document.querySelector('.slider-button.prev-button');
        const nextButton = document.querySelector('.slider-button.next-button');

        if (!sliderWrapper || !projectsGrid || projectCards.length === 0 || !prevButton || !nextButton) {
            console.warn("Project slider elements missing. Required: .projects-slider-container, .projects-grid, .project-card, .slider-button.prev-button, .slider-button.next-button. Slider not initialized.");
            return;
        }

        let currentIndex = 0;
        let itemsPerView = 3; 
        let gapValue = 0; 

        const calculateItemsPerView = () => {
            if (window.innerWidth <= 768) {
                itemsPerView = 1;
            } else if (window.innerWidth <= 992) {
                itemsPerView = 2;
            } else {
                itemsPerView = 3;
            }

            
            const gridComputedStyle = window.getComputedStyle(projectsGrid);
            gapValue = parseFloat(gridComputedStyle.gap) || 0; 
            const maxIndex = Math.max(0, projectCards.length - itemsPerView);
            currentIndex = Math.min(currentIndex, maxIndex);

            updateSliderPosition(false); 
            updateArrowState();
        };

        const updateSliderPosition = (animate = true) => {
            if (projectCards.length === 0) return; 
            const cardWidth = projectCards[0].offsetWidth;
            const totalSlideWidth = cardWidth + gapValue; 
            const offset = -currentIndex * totalSlideWidth;
            projectsGrid.style.transition = animate ? 'transform 0.5s ease-in-out' : 'none';
            projectsGrid.style.transform = `translateX(${offset}px)`;
        };

        const updateArrowState = () => {
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex >= projectCards.length - itemsPerView;
            
        };

        nextButton.addEventListener('click', () => {
            if (currentIndex < projectCards.length - itemsPerView) {
                currentIndex++;
                updateSliderPosition();
                updateArrowState();
            }
        });

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSliderPosition();
                updateArrowState();
            }
        });

       
        calculateItemsPerView();
        window.addEventListener('resize', calculateItemsPerView);
    };
    projectsSlider();
});
