// #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

const tableGeneratorForm: HTMLFormElement = document.getElementById('tableGeneratorForm') as HTMLFormElement;
const table: HTMLTableElement = document.getElementById('table') as HTMLTableElement;


tableGeneratorForm.onsubmit = function (e: SubmitEvent): void {
    table.innerText = '';
    e.preventDefault();
    const linesValue: number = +tableGeneratorForm.lines.value;
    const cellsValue: number = +tableGeneratorForm.cells.value;
    const dataValue: string = tableGeneratorForm.data.value;

    for (let i: number = 0; i < linesValue; i++) {
     const tr: HTMLTableRowElement = document.createElement('tr');
        for (let j: number = 0; j < cellsValue; j++) {
            const td: HTMLTableCellElement = document.createElement('td');
            td.innerText = dataValue;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
};