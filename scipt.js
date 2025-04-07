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
<<<<<<< HEAD
                // Get header height to offset scroll position
                const header = document.querySelector('.header'); // Ensure you have an element with class 'header' or adjust selector
=======
                
                const header = document.querySelector('.header'); 
>>>>>>> 6ac0cc02ccb96a1e657d2693df4d21cc10b5f095
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

<<<<<<< HEAD
    // Optional: Add subtle scroll animations (using Intersection Observer for general sections)
    const sections = document.querySelectorAll('.section-padding'); // Select sections to animate
=======
    
    const sections = document.querySelectorAll('.section-padding'); 
>>>>>>> 6ac0cc02ccb96a1e657d2693df4d21cc10b5f095

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
<<<<<<< HEAD
        // Initial state for animation (applied to general .section-padding elements)
=======
       
>>>>>>> 6ac0cc02ccb96a1e657d2693df4d21cc10b5f095
        section.style.opacity = 0;
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });


<<<<<<< HEAD
    // Optional: Simple Form Validation Hint (visual only)
    const contactForm = document.querySelector('.contact-form'); // Ensure you have a form with this class
=======
    
    const contactForm = document.querySelector('.contact-form'); 
>>>>>>> 6ac0cc02ccb96a1e657d2693df4d21cc10b5f095
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
<<<<<<< HEAD
                    // Visual feedback: red border
                    input.style.borderColor = 'red';
                } else {
                    // Use CSS variable or default color for reset
=======
                    
                    input.style.borderColor = 'red';
                } else {
                    
>>>>>>> 6ac0cc02ccb96a1e657d2693df4d21cc10b5f095
                     input.style.borderColor = 'var(--secondary-color, #ccc)'; 
                }
            });

            if (!isValid) {
                e.preventDefault(); 
                alert('Please fill in all required fields.');
            } else {
<<<<<<< HEAD
                // Handle form submission (e.g., Fetch API)
                console.log('Form submitted (simulation)');
                // alert('Message sent successfully! (Simulation)'); 
                // Optionally reset form
                // this.reset(); 
                // e.preventDefault(); // Prevent default for demo/AJAX submission
=======
                
                console.log('Form submitted (simulation)');
                
>>>>>>> 6ac0cc02ccb96a1e657d2693df4d21cc10b5f095
            }
        });

         
        contactForm.querySelectorAll('input[required], textarea[required]').forEach(input => {
            input.addEventListener('input', () => {
<<<<<<< HEAD
                // Reset border if it was red and now has content
=======
              
>>>>>>> 6ac0cc02ccb96a1e657d2693df4d21cc10b5f095
                if(input.style.borderColor === 'red' && input.value.trim()) {
                     input.style.borderColor = 'var(--secondary-color, #ccc)';
                }
            });
        });
    }

<<<<<<< HEAD
    // --- TYPED.JS INITIALIZATION ---
    // Check if the target element exists before initializing
    if (document.querySelector('.typing-text')) {
        // Ensure Typed library is loaded before trying to use it
        if (typeof Typed !== 'undefined') { 
            const typed = new Typed('.typing-text', {
                strings: [
                    'Full Stack Developer', // Add your desired phrases
=======
    
    if (document.querySelector('.typing-text')) {
        
        if (typeof Typed !== 'undefined') { 
            const typed = new Typed('.typing-text', {
                strings: [
                    'Full Stack Developer', 
>>>>>>> 6ac0cc02ccb96a1e657d2693df4d21cc10b5f095
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
<<<<<<< HEAD
    // --- END OF TYPED.JS CODE ---

    // --- GSAP HERO SECTION ANIMATIONS ---
    // Check if GSAP and ScrollTrigger are loaded
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Animation for the hero image
        gsap.from(".hero-image-wrapper", { // Target the wrapper for the image
            scrollTrigger: { 
                trigger: ".hero-section", // Target the hero section itself
                toggleActions: "play none none none", // Play animation once when entering
                start: "top 80%" // Trigger when 80% of the top enters viewport
            },
            opacity: 0, 
            scale: 0.8, // Example: scale in effect
=======
    

    
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
>>>>>>> 6ac0cc02ccb96a1e657d2693df4d21cc10b5f095
            duration: 1, 
            ease: 'power3.out' 
        });

<<<<<<< HEAD
        // Timeline for hero text elements
=======
       
>>>>>>> 6ac0cc02ccb96a1e657d2693df4d21cc10b5f095
        const heroTextTimeline = gsap.timeline({
            scrollTrigger: { 
                trigger: ".hero-section", 
                toggleActions: "play none none none", 
                start: "top 75%" // Start text animation slightly later
            },
<<<<<<< HEAD
            defaults: { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' } // Default animation values
        });

        // Add animations to the timeline, targeting specific elements within hero
        heroTextTimeline
            .from(".hero-text-content h1", { delay: 0.2 }) // Start h1 after a short delay
            .from(".hero-text-content .subtitle", {}, "-=0.6") // Overlap start times for smoother sequence
            .from(".hero-text-content .location", {}, "-=0.7") 
            .from(".hero-text-content .tagline", {}, "-=0.7") 
            .from(".hero-buttons", {}, "-=0.6") // Animate buttons container
            .from(".social-links > *", { y: 20, stagger: 0.1 }, "-=0.6"); // Stagger animation for social icons/buttons
=======
            defaults: { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' } 
        });

        
        heroTextTimeline
            .from(".hero-text-content h1", { delay: 0.2 }) 
            .from(".hero-text-content .subtitle", {}, "-=0.6") 
            .from(".hero-text-content .location", {}, "-=0.7") 
            .from(".hero-text-content .tagline", {}, "-=0.7") 
            .from(".hero-buttons", {}, "-=0.6") r
            .from(".social-links > *", { y: 20, stagger: 0.1 }, "-=0.6"); 
>>>>>>> 6ac0cc02ccb96a1e657d2693df4d21cc10b5f095

    } else {
        console.log("GSAP or ScrollTrigger not loaded - Hero animations skipped.");
    }
<<<<<<< HEAD
    const projectsSlider = () => { // Wrap in function to avoid global scope issues
        const sliderWrapper = document.querySelector('.projects-slider-wrapper');
        const projectsGrid = document.querySelector('.projects-grid');
        const projectCards = document.querySelectorAll('.project-card');
        const prevButton = document.querySelector('.prev-project');
        const nextButton = document.querySelector('.next-project');

        // Check if all elements exist
        if (!sliderWrapper || !projectsGrid || projectCards.length === 0 || !prevButton || !nextButton) {
            console.log("Project slider elements not found. Slider not initialized.");
            return; // Exit if elements aren't found
        }

        let itemsPerView = 3; // Default items per view
        let cardMargin = 20; // Total horizontal margin per card (e.g., 10px left + 10px right)
        let currentIndex = 0; // Index of the first visible card

        const calculateItemsPerView = () => {
            // Update itemsPerView based on screen width for responsiveness
            if (window.innerWidth <= 768) {
                itemsPerView = 1;
            } else if (window.innerWidth <= 992) {
                itemsPerView = 2;
            } else {
                itemsPerView = 3;
            }
            // Recalculate state after resize
             updateSliderPosition(false); // Update without animation on resize
             updateArrowState(); 
        };

        const updateSliderPosition = (animate = true) => {
            // Calculate the width of a single card including its margin
            // We use the grid's first child assuming all cards are the same width initially
            const cardWidth = projectCards[0].offsetWidth + cardMargin; 
            
            // Calculate the offset to move the grid
            const offset = -currentIndex * cardWidth;

            // Apply the transform
            projectsGrid.style.transition = animate ? 'transform 0.5s ease-in-out' : 'none'; // Enable/disable animation
            projectsGrid.style.transform = `translateX(${offset}px)`;
        };

        const updateArrowState = () => {
             // Disable prev button if at the beginning
            prevButton.disabled = currentIndex === 0;
            // Disable next button if at the end
            // Check if the start index of the *next* potential view exceeds the bounds
            nextButton.disabled = currentIndex + itemsPerView >= projectCards.length; 
        };

        // Event Listeners for Buttons
        nextButton.addEventListener('click', () => {
            // Check we are not at the end
            if (currentIndex + itemsPerView < projectCards.length) {
                currentIndex++; // Move index forward by one card position
                updateSliderPosition();
                updateArrowState();
            }
        });

        prevButton.addEventListener('click', () => {
             // Check we are not at the beginning
            if (currentIndex > 0) {
                currentIndex--; // Move index backward by one card position
                updateSliderPosition();
                updateArrowState();
            }
        });
        
        
        calculateItemsPerView(); 
        
        
        window.addEventListener('resize', calculateItemsPerView);

    };

}); // End DOMContentLoaded
=======
    


}); 
>>>>>>> 6ac0cc02ccb96a1e657d2693df4d21cc10b5f095



