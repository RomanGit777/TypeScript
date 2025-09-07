// #pghbnSB – створити функцію, яка повертає найменше число з масиву
let numbers = [1,2,3,4,5,0,5,78,9,10]
let minNumberValue = (array) => {
let minValue = array[0];
    for (const num of array) {
        if (num < minValue){
            minValue = num;
        }
    }
    return minValue;
}
console.log(minNumberValue(numbers));