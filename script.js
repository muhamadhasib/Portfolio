document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const scrollToTopButton = document.getElementById('scrollToTop');
    const mobileBreakpoint = 768; // Match this with your CSS media query

    function isMobile() {
        return window.innerWidth <= mobileBreakpoint;
    }

    // Toggle mobile menu
    menuToggle.addEventListener('click', function() {
        console.log('Menu toggle clicked'); // Debug log
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Force layout recalculation
        navMenu.offsetHeight;
        
        // Toggle visibility
        if (navMenu.classList.contains('active')) {
            navMenu.style.display = 'flex';
            navMenu.style.right = '0';
            navMenu.style.opacity = '1';
        } else {
            navMenu.style.right = '-100%';
            navMenu.style.opacity = '0';
        }
        console.log('Menu active:', navMenu.classList.contains('active')); // Debug log
    });

    // Close menu when a link is clicked (only on mobile)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMobile()) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navMenu.style.right = '-100%';
                navMenu.style.opacity = '0';
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll to top functionality
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Example functionality for buttons
    document.getElementById('downloadCV').addEventListener('click', function() {
        // Replace with actual download functionality
        alert('CV download functionality to be implemented');
    });

    document.getElementById('contactMe').addEventListener('click', function() {
        // Replace with actual contact form functionality
        alert('Contact form functionality to be implemented');
    });

    // Prevent default form submission
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add form submission logic here
        });
    });

    // Add simple form validation
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('invalid', () => {
            input.classList.add('error');
        });
        input.addEventListener('input', () => {
            if (input.validity.valid) {
                input.classList.remove('error');
            }
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (!isMobile()) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navMenu.style.removeProperty('display');
            navMenu.style.removeProperty('right');
            navMenu.style.removeProperty('opacity');
        }
    });
});