document.addEventListener('DOMContentLoaded', function() {
    // Скрипт для кнопки "Наверх"
    var backToTopLink = document.querySelector('footer a[href="#"]');

    if (backToTopLink) {
        backToTopLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Анимация fade-in при прокрутке
    const fadeInElements = document.querySelectorAll('.fade-
            }
        });
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

});
