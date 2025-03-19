document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.addEventListener('click', function() {
      const nav = document.querySelector('.site-nav');
      nav.classList.toggle('active');
    });
  }

  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log("Contact form submitted"); // Check if the form is submitted
      alert('Thank you for contacting us! We will get back to you shortly.');
      contactForm.reset();
    });
  }
});
