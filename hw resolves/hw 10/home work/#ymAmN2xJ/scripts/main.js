// #ymAmN2xJ
// Створити форму з трьома полями для name, surname, age та кнопкою.
// При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ.
// Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

const someForm = document.forms.someForm;
const target = document.getElementById('target');

someForm.onsubmit = function (e) {
    e.preventDefault();
    let nameValue = someForm.name.value;
    let surnameValue = someForm.surname.value;
    let ageValue = someForm.age.value;
    let obj = {nameValue, surnameValue, ageValue};
    target.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue;
}