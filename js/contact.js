document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const messageSent = document.getElementById('messageSent');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Простая валидация (можно добавить более сложную)
        if (!name || !email || !message) {
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        // Показываем сообщение об отправке
        messageSent.style.display = 'block';

        // Очищаем форму
        form.reset();
    });
});
