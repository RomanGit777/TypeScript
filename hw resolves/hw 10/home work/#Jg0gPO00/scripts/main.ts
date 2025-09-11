// #Jg0gPO00
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const input = document.getElementById('input') as HTMLInputElement;
const resultDiv = document.getElementById('result') as HTMLDivElement;

input.oninput = (): void => {
    resultDiv.innerText = String(+input.value * 2.2);
};