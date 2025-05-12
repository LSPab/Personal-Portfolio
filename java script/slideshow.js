document.addEventListener("DOMContentLoaded", function () {
    // Initialize slideshow
    const slideshow = document.querySelector('.slideshow');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.dots-container');

    if (!slideshow || slides.length === 0) return;

    let currentIndex = 0;
    let slideWidth = slides[0].clientWidth;
    let autoSlideInterval;

    // Create navigation dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Initial setup
    updateSlidePosition();
    startAutoSlide();

    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    slideshow.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    slideshow.addEventListener('mouseleave', () => {
        startAutoSlide();
    });

    // Window resize event
    window.addEventListener('resize', () => {
        slideWidth = slides[0].clientWidth;
        updateSlidePosition();
    });

    // Functions
    function updateSlidePosition() {
        slideshow.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlidePosition();
    }

    function startAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
});