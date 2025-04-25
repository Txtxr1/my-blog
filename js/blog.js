document.addEventListener('DOMContentLoaded', function() {
    // Фильтр по тегам
    const filterButtons = document.querySelectorAll('.filter button');
    const blogPosts = document.querySelectorAll('.blog-post');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tag = this.dataset.tag;

            blogPosts.forEach(post => {
                if (tag === 'all' || post.dataset.tags.includes(tag)) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });

    // Кнопка "Читать далее"
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const post = this.closest('.blog-post');
            const fullText = post.querySelector('.full-text');

            if (fullText.style.display === 'none' || fullText.style.display === '') {
                fullText.style.display = 'block'; // Показываем полный текст
                this.textContent = 'Скрыть'; // Меняем текст кнопки
            } else {
                fullText.style.display = 'none'; // Скрываем полный текст
                this.textContent = 'Читать далее'; // Возвращаем исходный текст
            }
        });
    });
});
