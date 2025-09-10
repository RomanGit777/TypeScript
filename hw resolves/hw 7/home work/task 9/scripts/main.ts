// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

// Array.prototype.myForEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// };
// let fruits = ['apple', 'pear', 'banana'];
// fruits.myForEach((item, index) => console.log(item, index));
// console.log('')
// let vegetables = ['pepper', 'broccoli', 'potato'];
// vegetables.myForEach((item,index)=>console.log(item, index));
// console.log('');

export {};

declare global {
    interface Array<T> {
        myFilter(callback: (value: T) => boolean): T[];
    }
}

Array.prototype.myFilter = function <T>(predicate: (value: T) => boolean): T[] {
    let arr = [];
    for (const item of this) {
        if (predicate(item)) {
            arr.push(item);
        }
    }
    return arr;
};

type TypeUsers = { name: string, age: number, status: boolean };
let users: TypeUsers[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
const result = users.myFilter((user) => user.status);

console.log(result);