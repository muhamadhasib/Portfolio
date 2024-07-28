document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const contactMeButton = document.getElementById('contactMe');
    const contactForm = document.getElementById('contact-form');
    const mobileBreakpoint = 768;
    const sections = {
    home: document.getElementById('home'),
    resume: document.getElementById('resume'),
    contact: document.getElementById('contact')
    };
    
    function isMobile() {
    return window.innerWidth <= mobileBreakpoint;
    }
    
    function toggleMenu() {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    }
    
    function showSection(sectionId) {
    Object.keys(sections).forEach(key => {
    sections[key].style.display = key === sectionId ? 'block' : 'none';
    });
    if (sectionId === 'home') sections.home.style.display = 'flex';
    if (sectionId === 'resume') initializeResume();
    }
    
    function initializeResume() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
    const targetWidth = bar.getAttribute('data-progress');
    bar.style.width = '0';
    setTimeout(() => {
    bar.style.width = targetWidth;
    bar.style.transition = 'width 1s ease-in-out';
    }, 100);
    });
    }
    
    menuToggle.addEventListener('click', toggleMenu);
    
    document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
    if (isMobile()) toggleMenu();
    showSection(link.getAttribute('href').substring(1));
    });
    });
    
    if (contactMeButton) {
    contactMeButton.addEventListener('click', () => showSection('contact'));
    }
    
    contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
    contactForm.reset();
    });
    
    window.addEventListener('resize', () => {
    if (!isMobile()) {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    }
    });
    
    showSection('home');
    });