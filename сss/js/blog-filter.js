// Фильтр постов на странице "Записи блога"
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter button');
    const posts = document.querySelectorAll('.post');

    function filterPosts(tag) {
        posts.forEach(post => {
            if (tag === 'all' || post.dataset.tags.includes(tag)) {
                post.style.display = 'block'; // Показываем пост
            } else {
                post.style.display = 'none';  // Скрываем пост
            }
        });
    }

    function activateButton(button) {
        filterButtons.forEach(btn => btn.classList.remove('active'));  // Убираем active со всех кнопок
        button.classList.add('active');  // Добавляем active к текущей кнопке
    }

    // При загрузке страницы показываем все посты и активируем кнопку "Все"
    filterPosts('all');
    activateButton(document.querySelector('.filter button[data-tag="all"]'));

    // Обработчики кликов по кнопкам
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tag = button.dataset.tag;
            filterPosts(tag);      // Фильтруем посты
            activateButton(button);  // Активируем кнопку
        });
    });


    // "Читать далее" для постов
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const post = button.parentNode;
            const fullText = post.querySelector('.full-text');
            fullText.classList.toggle('hidden');  // Показываем/скрываем полный текст
            button.textContent = fullText.classList.contains('hidden') ? 'Читать далее' : 'Скрыть';  // Меняем текст кнопки
        });
    });
});
