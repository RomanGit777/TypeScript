// – створити функцію яка повертає найменьше число з масиву
function arrayMinValue(numbers : number[]) : number {
    let min = numbers[0]!;
    for (let i = 1; i < numbers.length; i++){
       let number = numbers[i];
           if (number! < min) {
               min = number!
           }
    }
    return min;
}

console.log(arrayMinValue([123, 22, 59, 39, 11, 1, 27, 9, 82]))