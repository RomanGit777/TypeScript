// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr: number[], i1: number, i2: number): number[] | string{
    if (i1 < arr.length && i2 < arr.length){
        let temp = arr[i1];
        arr[i1] = arr[i2]!;
        arr[i2] = temp!;
        return arr;
    }
    return '!!!';
}
console.log(swap([11,22,33,44],0,1));