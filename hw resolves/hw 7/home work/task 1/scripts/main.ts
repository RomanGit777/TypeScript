// #XjJuucOMR0
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)

class User {


    constructor(
        private id: number, private name: string, private surname: string, private email: string, private phone: string) {

    }

}

let users: User[] = [
    new User(1, 'vasya', 'olekseev', 'eproerop@gmail.com', '+12313'),
    new User(2, 'fdfd', 'fdfdf', 'fdfd@gmail.com', '+2323'),
    new User(3, 'rttr', 'dffd', 'hjjjh@gmail.com', '+87887'),
    new User(4, 'hghg', 'gfgf', 'dffdfd@gmail.com', '+56676776'),
    new User(5, 'bvbvvb', 'kllklk', 'hjhjh@gmail.com', '+8787'),
    new User(6, 'hghgh', 'bvvbv', 'fdfdfd@gmail.com', '+77667'),
    new User(7, 'fggfg', 'hjjhhj', 'hghg@gmail.com', '+7676'),
    new User(8, 'dffdfd', 'dgdfd', 'dddsds@gmail.com', '+4344366'),
    new User(9, 'trtr', 'fgfgf', 'jkkjkj@gmail.com', '+4554455'),
    new User(10, 'qwe', 'ert', 'fgf@gmail.com', '+21323213'),
]
console.log(users);