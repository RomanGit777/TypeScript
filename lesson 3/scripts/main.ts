// class UserGen<T1> {
//     id: T1;
//     name: string;
//
//
//     constructor(id: T1, name: string) {
//         this.id = id;
//         this.name = name;
//     }
// }
//
// let userGen1 = new UserGen<number>(1, 'asda');
// let userGen2 = new UserGen<string>('asdq^%#%E', 'asdsa');
// let userGen = new UserGen<{ x: number; }>({x: 100500}, 'utryf');
//
// // let arr: Array<string> = [11, 22, 33];
//
//


// interface IUserLS {
//     id: number;
//     name: string;
// }
//
// let item = localStorage.getItem('user');
//
// if (item) {
//     let user: IUserLS = JSON.parse(item) as IUserLS;
// }
//
// interface IDog {
//     aka: string;
// }
//
// function foobar<T>(key: string): T {
//     let objJSON = localStorage.getItem(key);
//     if (objJSON) {
//         return JSON.parse(objJSON) as T;
//     }
//     return {} as T;
// }
//
// let iDog = foobar<IDog>('dog');
//
// let iUserLS = foobar<IUserLS>('user');

// function reverseArray<T>(array: T[]): T[]{
//     return [...array].reverse();
// }
//
// type UsersType = { name: string, age: number, status: boolean };
//
// let users: UsersType[]  = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// console.log(reverseArray(users));


// function reverseArray<T>(arr: T[]): T[] {
//     return [...arr].reverse();
// }

// class Stack<T> {
//     private arrayToStoreItems: T[] = [];
//
//     constructor(initialItems: T[] = []) {
//         this.arrayToStoreItems = initialItems;
//     }
//     push(item: T): void{
//         this.arrayToStoreItems.push(item);
//     }
//     pop(): T | undefined{
//         return this.arrayToStoreItems.pop();
//     }
//     peek(): T | undefined{
//        return this.arrayToStoreItems[this.arrayToStoreItems.length - 1];
//     }
// }

// Write a fetch call that sends a POST request with JSON body { "name": "Alice" }
// fetch("https://api.example.com/data", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({name: "Alice"})
// })
//     .then(response => response.json())
//     .then(data => console.log(data))

//
// async function getData (url: string) {
//     try {
//         const res = await fetch(url)
//         const data = await res.json()
//         console.log(data);
//     } catch(err){
//         console.log(err)
//     }
// }
// getData("https://api.example.com/data").then((data) => console.log(data));