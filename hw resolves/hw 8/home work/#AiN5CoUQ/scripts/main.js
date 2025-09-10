// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об’єкта.
//     Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.

function cloner(obj) {
    if (obj) {
        const functions = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const functionClone = obj[key].bind({});
                functions.push({functionClone, key});
            }
        }
        const cloneObj = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            cloneObj[func.key] = func.functionClone;
        }
        console.log(cloneObj);
        return cloneObj;
    }
    throw new Error('!!!');
}
let originalObj = {id: 123, name: 'qwe', greeting() {}, foo() {}}
cloner(originalObj);