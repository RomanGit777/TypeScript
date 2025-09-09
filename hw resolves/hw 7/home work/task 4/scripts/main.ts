// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, products (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    products: Product[];

    constructor(id: number, name: string, surname: string, email: string, phone: string, products: Product[]) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.products = products;
    }
}

class Product {
    title: string;
    price: number;


    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;

    }
}

let clients:Client[] = [
    new Client(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}, {title: 'phone', price: 987654}]),
    new Client(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}, {title: 'phone', price: 987654}]),
    new Client(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}, {title: 'phone', price: 987654}]),
    new Client(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}, {title: 'phone', price: 987654}]),
    new Client(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}, {title: 'phone', price: 987654}]),
    new Client(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}, {title: 'phone', price: 987654}]),
];

console.log(clients, Product);

const sort = clients.sort((a, b) => a.products.length - b.products.length);
console.log(sort);

