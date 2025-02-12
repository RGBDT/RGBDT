document.addEventListener('DOMContentLoaded', () => {
    // Добавляем обработчик события клика на значок меню
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});