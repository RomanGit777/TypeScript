// #ymAmN2xJ
// Створити форму з трьома полями для name, surname, age та кнопкою.
// При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ.
// Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

const someForm: HTMLFormElement = document.getElementById('someForm') as HTMLFormElement;
const target: HTMLDivElement = document.getElementById('target') as HTMLDivElement;

someForm.onsubmit = function (e: SubmitEvent): void {
    e.preventDefault();

    const nameInput = someForm.elements.namedItem("name") as HTMLInputElement;
    const surnameInput = someForm.elements.namedItem("surname") as HTMLInputElement;
    const ageInput = someForm.elements.namedItem("age") as HTMLInputElement;

    let obj: {nameInput: HTMLInputElement, surnameInput: HTMLInputElement, ageInput: HTMLInputElement} = {nameInput, surnameInput, ageInput};
    target.innerText = obj.nameInput + ' ' + obj.surnameInput + ' ' + obj.ageInput;
}