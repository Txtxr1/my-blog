document.addEventListener('DOMContentLoaded', function() {
    var tabButtons = document.querySelectorAll('.tab-buttons button');
    var tabContents = document.querySelectorAll('.tab-content');

    // Функция для скрытия всех вкладок
    function hideAllTabs() {
        tabContents.forEach(function(tab) {
            tab.classList.remove('active');
        });
        tabButtons.forEach(function(button) {
            button.classList.remove('active');
        });
    }

    // Обработчик кликов по кнопкам вкладок
    tabButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var tabId = this.getAttribute('data-tab');

            // Скрываем все вкладки
            hideAllTabs();

            // Активируем выбранную вкладку
            document.getElementById(tabId).classList.add('active');
            this.classList.add('active');
        });
    });

    // При загрузке страницы активируем первую вкладку
    if (tabButtons.length > 0) {
        tabButtons[0].click();
    }
});
