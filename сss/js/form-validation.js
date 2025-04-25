document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const messageSent = document.getElementById('messageSent');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Предотвращаем отправку формы

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Более строгая валидация (можно использовать библиотеки валидации)
        if (!name) {
            alert('Пожалуйста, введите ваше имя.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Пожалуйста, введите корректный email.');
            return;
        }

        if (!message) {
            alert('Пожалуйста, введите ваше сообщение.');
            return;
        }

        // Если валидация прошла, показываем сообщение об успехе
        messageSent.classList.remove('hidden');

        // Отправка на сервер (заглушка) - в реальном проекте здесь будет AJAX запрос
        console.log('Отправка формы:', { name, email, message });

        form.reset();  // Очищаем форму

        // Скрываем сообщение об успехе через 3 секунды
        setTimeout(() => {
            messageSent.classList.add('hidden');
        }, 3000);
    });

    // Функция валидации email (простая проверка на формат)
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
