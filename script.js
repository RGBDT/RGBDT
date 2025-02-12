// Функция для загрузки содержимого файла в элемент
function loadHTMLFile(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка загрузки файла: ' + response.status);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Ошибка:', error));
}

// Загружаем хедер и футер на всех страницах
document.addEventListener('DOMContentLoaded', () => {
    loadHTMLFile('header', 'header.html');
    loadHTMLFile('footer', 'footer.html');

    // Добавляем обработчик события клика на значок меню
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});