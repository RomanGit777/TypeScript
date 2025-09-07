type CreatedType = { id: number, name: string, age: number };

function foobar(users : CreatedType[]): void{
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}
foobar([{
    id:1, name: 'John', age: 33
},{
    id:2, name: 'Jowwwwhn', age: 22
},{
    id:3, name: 'eeeee', age: 123
},{
    id:4, name: 'fffff', age: 3333
},{
    id:5, name: 'asasasa', age: 445
}
])