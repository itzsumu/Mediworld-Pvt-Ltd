document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("Contact form submitted"); //check if the form is submitted
        alert('Thank you for contacting us! We will get back to you shortly.');
        contactForm.reset();
      });
    }
  
    const slider = document.querySelector('.hero-slider');
    const images = slider.querySelectorAll('img');
    let currentImage = 0;
  
    function showImage(index) {
      console.log("Showing image:", index); //check if this function is called
      images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
      });
    }
  
    function nextImage() {
      currentImage = (currentImage + 1) % images.length;
      showImage(currentImage);
    }
  
    console.log("Number of images:", images.length); // Check if images are found
  
    showImage(currentImage); // Show the first image
    setInterval(nextImage, 5000); // Start the slideshow
  });
  
  