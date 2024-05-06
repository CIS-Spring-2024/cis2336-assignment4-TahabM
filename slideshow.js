document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll('.slideshow-container img');
    var currentSlide = 0;

    function showSlide(n) {
        slides.forEach(function(slide) {
            slide.style.opacity = 0;
        });
        slides[n].style.opacity = 1;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000);
});
