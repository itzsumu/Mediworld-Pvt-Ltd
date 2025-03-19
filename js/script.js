document.addEventListener('DOMContentLoaded', () => {
    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for contacting us! We will get back to you shortly.');
            contactForm.reset();
        });
    }

    // Mobile Menu Handler
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.querySelector('.site-nav');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !nav.contains(e.target)) {
            nav.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
});
