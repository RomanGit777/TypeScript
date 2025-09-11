// #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

const tableGeneratorForm = document.forms['tableGeneratorForm'];
const table = document.getElementById('table');


tableGeneratorForm.onsubmit = function (e) {
    table.innerText = '';
    e.preventDefault();
    const linesValue = +tableGeneratorForm.lines.value;
    const cellsValue = +tableGeneratorForm.cells.value;
    const dataValue = tableGeneratorForm.data.value;

    for (let i = 0; i < linesValue; i++) {
     const tr = document.createElement('tr');
        for (let j = 0; j < cellsValue; j++) {
            const td = document.createElement('td');
            td.innerText = dataValue;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
};