// #8abtVjRv
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню.
// (sort)
function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(1, 'vasya', 'olekseev', 'eprop@gmail.com', '+1213',
        [{title: 'tv', price: 13000},
            {title: 'tv', price: 13000},
            {title: 'phone', price: 5000}]),
    new Client(2, 'fdfd', 'fdfdf', 'fd@gmail.com', '+2323',
        [{title: 'tv', price: 13000},
        {title: 'tv', price: 13000},
        {title: 'tv', price: 13000},
        {title: 'phone', price: 5000}]),
    new Client(3, 'rttr', 'dffd', 'hjh@gmail.com', '+87', [{title: 'tv', price: 13000},
        {title: 'phone', price: 5000},
        {title: 'phone', price: 5000}]),
    new Client(4, 'hghg', 'gfgf', 'dffd@gmail.com', '+56776', [{title: 'tv', price: 13000}]),
    new Client(5, 'bvbvvb', 'kllklk', 'hjh@gmail.com', '+8787', [{title: 'tv', price: 13000}]),
    new Client(6, 'hghgh', 'bvvbv', 'fd@gmail.com', '+7767', [{title: 'tv', price: 13000},
        {title: 'phone', price: 5000},
        {title: 'phone', price: 5000}]),
    new Client(7, 'fggfg', 'hjjhhj', 'hg@gmail.com', '+7676', [{title: 'tv', price: 13000}]),
    new Client(8, 'dffdfd', 'dgdfd', 'dds@gmail.com', '+43366', [{title: 'tv', price: 13000},
        {title: 'phone', price: 5000},
        {title: 'phone', price: 5000}]),
    new Client(9, 'trtr', 'fgfgf', 'jk@gmail.com', '+45455', [{title: 'tv', price: 13000},
        {title: 'phone', price: 5000}]),
    new Client(10, 'qwe', 'ert', 'fgf@gmail.com', '+2113', [{title: 'tv', price: 13000},
        {title: 'phone', price: 5000}])
];
console.log(clients.sort((a, b) => a.order.length - b.order.length));