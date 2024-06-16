let currentIndex = 0;

function moveCarousel(direction) {
    const carouselContainer = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Pausar el video si no está en la diapositiva actual
    const video = document.querySelector('video');
    if (video) {
        video.pause();
        video.currentTime = 0; // Reiniciar el video
    }

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;

    // Reproducir el video si está en la diapositiva actual
    if (items[currentIndex].tagName === 'VIDEO') {
        items[currentIndex].play();
    }
}
