// #Jg0gPO00
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const input = document.getElementById('input');
const resultDiv = document.getElementById('result');
input.oninput = function () {resultDiv.innerText = +this.value * 2.2;}