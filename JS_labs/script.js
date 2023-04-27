// Получаем все блоки div
const blocks = document.querySelectorAll('.block');

// Запускаем функцию через каждые 100 миллисекунд
setInterval(() => {
    // Генерируем случайное число от 0 до количества блоков
    const randomIndex = Math.floor(Math.random() * blocks.length);

    // Выбираем случайный блок и добавляем в него картинку
    const block = blocks[randomIndex];
    block.style.backgroundImage = 'url(airplane_022.jpg)';
}, 100);