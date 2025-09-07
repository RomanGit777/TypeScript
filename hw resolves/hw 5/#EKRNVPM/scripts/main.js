// #EKRNVPM
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад
// sum([1,2,10]) //->13
let numbers = [1,2,10];
let sum = (arr) => {
    let basket = 0;
    for (const num of arr) {
        basket += num;
    }
    return basket;
}
console.log(sum(numbers));