document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');

            // Toggle aria-expanded attribute
            const isExpanded = navMenu.classList.contains('active');
            hamburger.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when a link is clicked
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


    // Smooth Scrolling for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Get header height to offset scroll position
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open after clicking a link
                 if (navMenu && navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    // Optional: Add subtle scroll animations (using Intersection Observer)
    const sections = document.querySelectorAll('.section-padding'); // Select sections to animate

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
                // Optional: unobserve after animation to save resources
                // observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        // Initial state for animation
        section.style.opacity = 0;
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });


    // Optional: Simple Form Validation Hint (visual only)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Basic check - HTML5 'required' does most of the work
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    // You could add visual feedback here (e.g., red border)
                    input.style.borderColor = 'red';
                } else {
                     input.style.borderColor = 'var(--secondary-color)'; // Reset border
                }
            });

            if (!isValid) {
                e.preventDefault(); // Prevent submission if fields are empty
                alert('Please fill in all required fields.');
            } else {
                // Here you would typically handle the form submission
                // e.g., using Fetch API to send data to a backend or service
                // For now, just log a message
                console.log('Form submitted (simulation)');
                // alert('Message sent successfully! (Simulation)'); // Uncomment for user feedback
                // Optionally reset form after submission
                // this.reset();
                // e.preventDefault(); // Prevent actual submission for demo
            }
        });

         // Reset border color on input
        contactForm.querySelectorAll('input[required], textarea[required]').forEach(input => {
            input.addEventListener('input', () => {
                if(input.style.borderColor === 'red' && input.value.trim()) {
                     input.style.borderColor = 'var(--secondary-color)';
                }
            });
        });
    }

}); // End DOMContentLoaded