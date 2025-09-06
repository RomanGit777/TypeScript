
class User  {
    name: string;
    age: number;
    status: boolean;

    constructor(name: string, age: number, status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    greeting?: (str: string) => string;
}

let users: User[] = [
    {greeting: (str: string) => 'hello',name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 31, status: true},
    {name: 'kolya', age: 32, status: false},
    {name: 'olya', age: 35, status: false},
    {name: 'max', age: 33, status: false},
    {name: 'anya', age: 27, status: false},
    {name: 'oleg', age: 29, status: false},
    {name: 'andrey', age: 33, status: false},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 32, status: false}
];