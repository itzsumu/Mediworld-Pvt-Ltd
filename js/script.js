// js/script.js

document.addEventListener('DOMContentLoaded', () => {
  // Handle Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the default form submission

      // For demonstration, display an alert. Later, integrate an API or email service.
      alert('Thank you for contacting us! We will get back to you shortly.');

      // Optionally, reset the form:
      contactForm.reset();
    });
  }

  // Toggle Mobile Menu
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.addEventListener('click', function () {
      const nav = document.querySelector('.site-nav');
      nav.classList.toggle('active');
    });
  }
});

// js/script.js

document.addEventListener('DOMContentLoaded', () => {
  // Toggle Mobile Menu
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.addEventListener('click', function () {
      const nav = document.querySelector('.site-nav');
      nav.classList.toggle('active');
    });
  }

  // Handle Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the default form submission

      // For demonstration, display an alert. Later, integrate an API or email service.
      alert('Thank you for contacting us! We will get back to you shortly.');

      // Optionally, reset the form:
      contactForm.reset();
    });
  }
});
