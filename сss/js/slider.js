// Слайдер на главной странице
document.addEventListener('DOMContentLoaded', () => {
    const sliderImages = document.querySelectorAll('.slider img');
    let currentImage = 0;
    let intervalId; // ID интервала

    function showSlide(index) {
        sliderImages.forEach(img => img.style.display = 'none'); // Скрываем все изображения
        sliderImages[index].style.display = 'block'; // Показываем текущее
    }

    function nextSlide() {
        currentImage = (currentImage + 1) % sliderImages.length;
        showSlide(currentImage);
    }

    function startSlider() {
        intervalId = setInterval(nextSlide, 3000); // Меняем слайд каждые 3 секунды
    }

    function stopSlider() {
        clearInterval(intervalId); // Останавливаем слайдер
    }

    // Инициализация слайдера
    if (sliderImages.length > 0) {
        showSlide(currentImage); // Показываем первый слайд
        startSlider(); // Запускаем слайдер

        // Дополнительно: Останавливаем слайдер при наведении
        const slider = document.querySelector('.slider');
        slider.addEventListener('mouseenter', stopSlider);
        slider.addEventListener('mouseleave', startSlider);
    }
});
