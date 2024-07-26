document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const scrollToTopButton = document.getElementById('scrollToTop');
    const mobileBreakpoint = 768; // Match this with your CSS media query
    const homeSection = document.getElementById('home');
    const contactSection = document.getElementById('contact');
    const contactMeButton = document.getElementById('contactMe');
    const contactForm = document.getElementById('contact-form');
    
    function isMobile() {
    return window.innerWidth <= mobileBreakpoint;
    }
    
    // Toggle mobile menu
    menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    });
    
    // Close menu when a link is clicked (only on mobile)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
    link.addEventListener('click', () => {
    if (isMobile()) {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    }
    // Show/hide sections based on clicked link
    const targetId = link.getAttribute('href').substring(1);
    if (targetId === 'home') {
    homeSection.style.display = 'flex';
    contactSection.style.display = 'none';
    } else if (targetId === 'contact') {
    homeSection.style.display = 'none';
    contactSection.style.display = 'block';
    }
    });
    });
    
    // Contact Me button functionality
    if (contactMeButton) {
    contactMeButton.addEventListener('click', () => {
    homeSection.style.display = 'none';
    contactSection.style.display = 'block';
    });
    }
    
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
    
    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add form submission logic here
    alert('Form submitted successfully!');
    contactForm.reset();
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
    if (!isMobile()) {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    }
    });
    });