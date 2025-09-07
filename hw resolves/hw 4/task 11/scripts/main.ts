function sum(array : number[]) : number {
    let basket = 0;
    for (const item of array) {
        basket = basket + item;
    }
    return basket;
}
console.log(sum([1,2,10]))