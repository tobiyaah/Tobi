// JavaScript for the image carousel
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');

let currentSlide = 0;

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Set interval for automatic slide change (every 5 seconds)
setInterval(nextSlide, 5000);

// Initial slide display
showSlide(currentSlide);
