// Получаем ссылки на элементы страницы
const toggleText = document.getElementById('toggle-menu');
const menu = document.getElementById('menu');
const message = document.getElementById('message');


// Добавляем обработчик клика на надпись для переключения меню
toggleText.addEventListener('click', function() {
    // Если меню скрыто, показываем его, а если видимо, то скрываем
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

// Получаем ссылки на все элементы списка и устанавливаем начальное значение равным количеству элементов в списке
const listItems = document.querySelectorAll('#menu li');
let itemCount = listItems.length;

// Создаем функцию, которая будет использоваться для плавного исчезания элемента списка
function fadeOut(el, callback) {
    el.style.opacity = 1; //Начальное значение прозрачности элемента

    (function fade() {
        // Уменьшаем прозрачность элемента, пока она не достигнет 0
        if ((el.style.opacity -= 0.02) < 0) {
            el.style.display = 'none'; // Скрываем элемент
            itemCount--; // Уменьшаем количество оставшихся элементов

            // Если это был последний элемент списка, вызываем callback
            if (itemCount === 0) {
                callback();
            }
        } else {
            requestAnimationFrame(fade); // Повторяем функцию fade
        }
    })();
}

// Создаем функцию displayMessage, которая устанавливает текст сообщения о том, что сладости закончились
function displayMessage() {
    message.textContent = 'Сладости закончились';
}

// Добавляем обработчики клика на каждый элемент списка
listItems.forEach(function(item) {
    item.addEventListener('click', function() {
        // При клике на элемент списка вызываем функцию fadeOut с этим элементом в качестве аргумента и displayMessage в качестве callback
        fadeOut(item, function() {
            displayMessage();
        });
    });
});