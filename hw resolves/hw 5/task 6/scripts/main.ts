// #pghbnSB – створити функцію, яка повертає найменше число з масиву
let numbers: number[] = [1,2,3,4,5,0,5,78,9,10]
let minNumberValue= (array: number[]): number => {
let minValue: number = array[0]!;
    for (const num of array) {
        if (num < minValue){
            minValue = num;
        }
    }
    return minValue;
}
console.log(minNumberValue(numbers));