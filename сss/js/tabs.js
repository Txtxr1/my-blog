// Вкладки на странице "Обо мне"
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function showTab(tabId) {
        tabContents.forEach(content => content.classList.remove('active')); // Скрываем все вкладки
        tabButtons.forEach(button => button.classList.remove('active'));   // Убираем активное состояние с кнопок
        document.getElementById(tabId).classList.add('active');        // Показываем нужную вкладку
        const activeButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);  //Находим активную кнопку
        if(activeButton){
            activeButton.classList.add('active');
        }
    }

    // При загрузке страницы показываем первую вкладку
    if(tabButtons.length > 0 && tabContents.length > 0){
        showTab(tabButtons[0].dataset.tab);
    }

    // Обработчики кликов по кнопкам
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            showTab(button.dataset.tab); // Показываем вкладку по data-tab
        });
    });
});
