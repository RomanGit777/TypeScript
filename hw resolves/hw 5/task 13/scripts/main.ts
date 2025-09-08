// #0Kxco1edSN
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість
// li визначається другим аргументом, який є числовим (тут використовувати цикл)
let foo = (text: string,count: number): void => {
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
    document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
};
foo('Hello!', 5);