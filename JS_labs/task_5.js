// Функция для добавления ячейки <td> в таблицу
function addTableCell() {
    // Найти таблицу
    var table = document.getElementById("myTable");

    // Запросить у пользователя содержимое ячейки
    var cellText = prompt("Введите содержимое ячейки (ESC для отмены):");

    // Проверить, что пользователь не нажал ESC
    if (cellText !== null) {
        // Создать новый элемент <td>
        var cell = document.createElement("td");

        // Создать текстовый узел для новой ячейки
        var textNode = document.createTextNode(cellText);

        // Добавить текстовый узел в ячейку
        cell.appendChild(textNode);

        // Запросить у пользователя номер строки, куда нужно добавить ячейку
        var rowIndex = prompt("Введите номер строки, куда нужно добавить ячейку (ESC для отмены):");

        // Проверить, что пользователь не нажал ESC
        if (rowIndex !== null) {
            // Преобразовать индекс строки в число
            rowIndex = parseInt(rowIndex);

            // Проверить, что индекс строки является корректным числом
            if (!isNaN(rowIndex)) {
                // Вычесть 1, чтобы получить корректный индекс строки в JavaScript
                rowIndex--;

                // Проверить, что индекс строки находится в допустимых границах
                if (rowIndex >= 0 && rowIndex < table.rows.length) {
                    // Добавить ячейку в выбранную строку таблицы
                    table.rows[rowIndex].appendChild(cell);
                } else {
                    alert("Некорректный номер строки");
                }
            } else {
                alert("Некорректный номер строки");
            }
        }
    }
}