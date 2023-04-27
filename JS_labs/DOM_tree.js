function task3(){
    // Получаем родительский элемент
    const parent = document.getElementById("DT3");
    // Получаем массив дочерних элементов <form>
    const forms = Array.from(parent.getElementsByTagName('form'));
    // Выводим число элементов <form>
    document.getElementById('form-count').innerHTML = `Количество форм: ${forms.length}`;
}
task3()