// #pOeHKct
// – Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
class User {
    constructor(
        private _id: number, private name: string, private surname: string, private email: string, private phone: string) {

    }

    get id(): number {
        return this._id;
    }
}

let users: User[] = [
    new User(2, 'fdfd', 'fdfdf', 'fdfd@gmail.com', '+2323'),
    new User(6, 'hghgh', 'bvvbv', 'fdfdfd@gmail.com', '+77667'),
    new User(4, 'hghg', 'gfgf', 'dffdfd@gmail.com', '+56676776'),
    new User(9, 'trtr', 'fgfgf', 'jkkjkj@gmail.com', '+4554455'),
    new User(5, 'bvbvvb', 'kllklk', 'hjhjh@gmail.com', '+8787'),
    new User(10, 'qwe', 'ert', 'fgf@gmail.com', '+21323213'),
    new User(1, 'vasya', 'olekseev', 'eproerop@gmail.com', '+12313'),
    new User(7, 'fggfg', 'hjjhhj', 'hghg@gmail.com', '+7676'),
    new User(8, 'dffdfd', 'dgdfd', 'dddsds@gmail.com', '+4344366'),
    new User(3, 'rttr', 'dffd', 'hjjjh@gmail.com', '+87887'),
];


console.log(users.sort((u1, u2) => u1.id - u2.id));