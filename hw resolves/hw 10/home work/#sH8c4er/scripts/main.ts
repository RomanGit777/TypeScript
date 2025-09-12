// #sH8c4er
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

// const btn: HTMLButtonElement = document.getElementsByTagName('button')[0] as HTMLButtonElement;
// btn.onclick = () => {
//     const div: HTMLDivElement = document.getElementById('text') as HTMLDivElement;
//     div.style.height = '0';
// }

const btn: HTMLButtonElement = document.getElementsByTagName('button')[0] as HTMLButtonElement;
btn.onclick = (): void => {
     document.getElementById('text')!.remove();
}