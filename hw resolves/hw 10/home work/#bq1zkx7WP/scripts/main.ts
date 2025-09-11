// #bq1zkx7WP
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

const sumElement: HTMLElement | null = document.getElementById('sum');

let sum: number = +localStorage.getItem('sum')! || 100;
let lastUpdate: number = +localStorage.getItem('lastUpdate')! || 0;

const now: number = Date.now();

if(now - lastUpdate > 10_000){
    sum += 10;
    localStorage.setItem('sum', sum.toString());
    localStorage.setItem('lastUpdate', now.toString());
}
if(sumElement){
sumElement.innerText = sum + 'грн';
}