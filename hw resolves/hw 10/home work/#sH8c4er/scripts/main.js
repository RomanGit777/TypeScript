// #sH8c4er
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

// const btn = document.getElementsByTagName('button')[0];
// btn.onclick = () => {
//     const div = document.getElementById('text');
//     div.style.height = '0';
// }

const btn = document.getElementsByTagName('button')[0];
btn.onclick = () => {
     document.getElementById('text').remove();
}