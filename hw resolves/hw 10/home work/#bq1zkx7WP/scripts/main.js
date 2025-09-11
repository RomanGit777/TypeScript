// #bq1zkx7WP
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

const sumElement = document.getElementById('sum');

let sum = +localStorage.getItem('sum') || 100;
let lastUpdate = +localStorage.getItem('lastUpdate') || 0;

const now = Date.now();

if(now - lastUpdate > 10000){
    sum += 10;
    localStorage.setItem('sum', sum);
    localStorage.setItem('lastUpdate', now);
}

sumElement.innerText = sum + 'грн';