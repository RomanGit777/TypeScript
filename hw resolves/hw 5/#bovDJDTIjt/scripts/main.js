// #bovDJDTIjt
// – створити функцію, яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для
// кожного об'єкту окремий блок.
let arrayOfUsers = [
    {id: 1, name: 'John', age: 21},
    {id: 2, name: 'Johnathan', age: 24},
    {id: 3, name: 'Ronald', age: 25}
]
let arr = (array) => {
    for (const user of array) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}
arr(arrayOfUsers);