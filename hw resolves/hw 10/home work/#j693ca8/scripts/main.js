// #j693ca8
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку
// зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

const form = document.forms.f1;
const message = document.getElementById('message');

form.onsubmit = function (e) {
    e.preventDefault();
   const age = form.age.value;

   if (age < 18) {
       message.innerText = 'You are under 18!'
   }
   if (age >= 18) {
       message.innerText = 'Welcome!'
   }
}