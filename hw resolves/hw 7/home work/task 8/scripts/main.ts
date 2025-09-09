// #zg6Fifnqig
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [
    new Cinderella('qweq1', 20, 31),
    new Cinderella('qweq2', 21, 32),
    new Cinderella('qweq3', 22, 33),
    new Cinderella('qweq4', 23, 34),
    new Cinderella('qweq5', 24, 35),
    new Cinderella('qweq6', 25, 36),
    new Cinderella('qweq7', 26, 37),
    new Cinderella('qweq8', 27, 38),
    new Cinderella('qweq9', 28, 39),
    new Cinderella('qweq10', 29, 40),
];

class Prince {

    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

const prince = new Prince('tre', 25, 36);

for (const cinderella of cinderellas) {
    if(cinderella.footSize === prince.shoe){
        prince.wife = cinderella;
    }
}
console.log(prince);

const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.shoe);
prince.wife = cinderellaMain;
console.log(prince);