// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add click event for CTA button
    document.querySelector('.cta-button').addEventListener('click', function() {
        document.querySelector('#products').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Handle form submission
    document.getElementById('inquiryForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your inquiry! We will get back to you soon.');
        this.reset(); // Clear the form
    });
});
let slideIndex = 0;

// Initialize and show slides
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slideIndex
    slideIndex++;

    // If slideIndex exceeds slide count, reset to first slide
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";

    // Set timer for automatic transition (5 seconds here)
    setTimeout(showSlides, 5000);
}

// Manual navigation
function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}
document.getElementById('inquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your inquiry!');
    this.reset();
});
