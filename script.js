// Получаем элементы меню и значка
const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');

// Добавляем обработчик события клика на значок меню
menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});