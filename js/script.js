// js/script.js

document.addEventListener('DOMContentLoaded', () => {
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
  // js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
  
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Here you can add more validation or integrate with a backend API
        alert('Thank you for contacting us! We will get back to you shortly.');
        
        // Optionally reset the form after submission
        contactForm.reset();
      });
    }
  });
  
  
