// Устанавливаем начальную тему
const currentTheme = 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

// Обновляем иконку
function updateThemeIcon() {
    const icon = document.getElementById('theme-icon'); // Используем id вместо class
    if (!icon) return; // Проверяем, существует ли элемент
    
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Инициализируем иконку
document.addEventListener('DOMContentLoaded', function() {
    updateThemeIcon();
    
    // Добавляем обработчик события
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
});

// Переключение темы
function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    updateThemeIcon();
}