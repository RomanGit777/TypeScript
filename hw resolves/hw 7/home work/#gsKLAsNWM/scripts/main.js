// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
let fruits = ['apple', 'pear', 'banana'];
fruits.myForEach((item, index) => console.log(item, index));
console.log('')
let vegetables = ['pepper', 'broccoli', 'potato'];
vegetables.myForEach((item,index)=>console.log(item, index));
let numbers = [1,2,3,4,5,6,7];
console.log('')

Array.prototype.myFilter = function (callback){
    let filteredInfo = [];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            filteredInfo.push(this[i]);
        }
    }
    return filteredInfo;
};
console.log(numbers.myFilter(even => even % 2 === 0));