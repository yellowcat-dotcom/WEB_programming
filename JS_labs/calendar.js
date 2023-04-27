// Функция для создания календаря
function Calendar2(id, year, month) {
    // Получаем последний день месяца
    var Dlast = new Date(year, month+1, 0).getDate(),
        // Получаем дату последнего дня месяца
        D = new Date(year, month, Dlast),
        // Получаем номер дня недели последнего дня месяца
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        // Получаем номер дня недели первого дня месяца
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        // Начинаем создавать таблицу
        calendar = '<tr>',
        // Создаем массив месяцев для отображения текущего месяца
        month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];

    // Заполняем пустые ячейки в начале календаря, если первый день не понедельник
    if (DNfirst != 0) {
        for(var i = 1; i < DNfirst; i++) {
            calendar += '<td>';
        }
    } else {
        // Заполняем пустые ячейки, если первый день понедельник
        for(var i = 0; i < 6; i++) {
            calendar += '<td>';
        }
    }

    // Заполняем ячейки календаря числами месяца
    for(var i = 1; i <= Dlast; i++) {
        // Отображаем текущий день
        if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
            calendar += '<td class="today">' + i;
        } else {
            // Отображаем обычные дни
            calendar += '<td>' + i;
        }
        // Если текущий день недели - воскресенье, переносим на следующую строку
        if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
            calendar += '<tr>';
        }
    }

    // Заполняем пустые ячейки в конце календаря, если последний день не воскресенье
    for(var i = DNlast; i < 7; i++) {
        calendar += '<td>&nbsp;';
    }

    // Вставляем готовую таблицу календаря в HTML
    document.querySelector('#'+id+' tbody').innerHTML = calendar;

    // Вставляем название текущего месяца и года в заголовок таблицы
    document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
}

// Вызываем функцию для создания календарь
Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());