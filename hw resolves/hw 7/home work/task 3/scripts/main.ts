// #nkMXISv
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі
// списком товарів) створити пустий масив, наповнити його 10 об’єктами Client

class Client {
    id, name, surname, email, phone, ...products

    constructor(id, name, surname, email, phone, products) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.products = products;
    }
}
// function Client(id, name, surname, email, phone, ...products) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = products;
// }

function Products(title, price) {
    this.title = title;
    this.price = price;
}

let clients = [
    new Client(1, 'vasya','olekseev','eproerop@gmail.com','+12313',new Products('tv',13000), new Products('phone',5000)),
    new Client(2, 'fdfd','fdfdf','fdfd@gmail.com','+2323',new Products('tv',22333), new Products('phone',12323)),
    new Client(3, 'rttr','dffd','hjjjh@gmail.com','+87887',new Products('tv',45455), new Products('phone',21212)),
    new Client(4, 'hghg','gfgf','dffdfd@gmail.com','+56676776',new Products('tv',1323230), new Products('phone',51200)),
    new Client(5, 'bvbvvb','kllklk','hjhjh@gmail.com','+8787',new Products('tv',22300), new Products('phone',2323)),
    new Client(6, 'hghgh','bvvbv','fdfdfd@gmail.com','+77667',new Products('tv',2323), new Products('phone',4554)),
    new Client(7, 'fggfg','hjjhhj','hghg@gmail.com','+7676',new Products('tv',44334), new Products('phone',5665)),
    new Client(8, 'dffdfd','dgdfd','dddsds@gmail.com','+4344366',new Products('tv',5445), new Products('phone',2121)),
    new Client(9, 'trtr','fgfgf','jkkjkj@gmail.com','+4554455',new Products('tv',211212), new Products('phone',32323)),
    new Client(10, 'qwe','ert','fgf@gmail.com','+21323213',new Products('tv',2323), new Products('phone',2332))
];
console.log(clients);