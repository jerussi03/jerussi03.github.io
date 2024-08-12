document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const sliderBackground = document.querySelector('.slider-background');

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        let imgSrc = slides[index].querySelector('img').src;
        sliderBackground.style.backgroundImage = `url(${imgSrc})`;
    }

    function changeSlide(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }

    function autoPlay() {
        changeSlide(1);
        setTimeout(autoPlay, 3000);
    }

    showSlide(currentIndex);
    autoPlay();

    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));
});
