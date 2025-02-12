// Получаем элементы
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

// Добавляем обработчик события для кнопки
menuToggle.addEventListener('click', function() {
  sidebar.classList.toggle('active'); // Переключаем класс 'active'
});

// Закрываем меню при клике вне его области
document.addEventListener('click', function(event) {
  if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
    sidebar.classList.remove('active');
  }
});