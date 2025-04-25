// Текстовый слайдер на главной странице
document.addEventListener('DOMContentLoaded', () => {
    const sliderTexts = document.querySelectorAll('.slider p');
    let currentTextIndex = 0;
    let intervalId;

    function showText(index) {
        sliderTexts.forEach(text => text.style.display = 'none');
        sliderTexts[index].style.display = 'block';
    }

    function nextText() {
        currentTextIndex = (currentTextIndex + 1) % sliderTexts.length;
        showText(currentTextIndex);
    }

    function startSlider() {
        intervalId = setInterval(nextText, 3000);
    }

    function stopSlider() {
        clearInterval(intervalId);
    }

    if (sliderTexts.length > 0) {
        showText(currentTextIndex);
        startSlider();

        const slider = document.querySelector('.slider');
        slider.addEventListener('mouseenter', stopSlider);
        slider.addEventListener('mouseleave', startSlider);
    }
});
