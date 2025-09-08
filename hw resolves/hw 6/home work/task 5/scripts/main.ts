// #bfoJuse4ZzP
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str ='Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть','воли','як','ясла','повні']
function stringToArray(str: string): string[]{
    if(str){
        return str.split(' ');
    }
    return [''];
}
console.log(stringToArray('Ревуть воли як ясла повні'));