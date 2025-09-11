// #Jg0gPO00
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const input: HTMLInputElement = document.getElementById('input') as HTMLInputElement;
const resultDiv: HTMLDivElement = document.getElementById('result') as HTMLDivElement;
input.oninput = function (this:HTMLInputElement): void {resultDiv.innerText = String(+this.value * 2.2);}