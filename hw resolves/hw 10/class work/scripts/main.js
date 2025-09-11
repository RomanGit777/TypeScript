// let target = document.getElementById("target");
// // target.onclick = function (ev) {
// //     console.log("click", ev);
// //     console.log(ev);
// // };
// // target.onmousemove = function (ev) { // uses while your mouse moving
// //     console.log('move');
// //     console.log(ev.clientX, ev.clientY);
// //     let r = ev.clientX
// //     let g = ev.clientX
// //     let b = ev.clientY
// //     this.style.background = `rgb(${r},${g},${b})`
// // };
//
// // target = document.getElementById("target"); // if you going to redefine, it will use the last one func
// // target.onclick = function (ev) {
// //     console.log('asdasdas');
// // };
//
// // target.addEventListener('click',function (ev){ // you can add event to your exist event
// //     console.log(ev)
// // })
//
// target.onmouseover = function () {
//     console.log("over");
// }
// target.onmouseleave = function () {
//     console.log("leave");
// }

// let i1 = document.getElementById("i1");
// i1.oninput = function() {
//     console.log(this.value)
// };

// let i1 = document.getElementById("i1");
// i1.oninput = function(){
//     target.innerText = this.value
// }

// let f1 = document.forms.f1;
// f1.onsubmit = function (ev){
//     ev.preventDefault();
//     console.log('hello');
//     let user = {name:this.username.value}
//     console.log(user);
// }

// window.onload = function () {
//     console.log("Load");
// }
//
// document.onreadystatechange = function () {
//     if (document.readyState === "interactive") {
//         document.body.innerText = 'Loading start...'
//     }else if (document.readyState === "complete") {
//         document.body.innerText = 'Loading complete'
//     }
// }

// localStorage.setItem('Hello', 'World!');
// const key = localStorage.getItem('Hello');
// console.log(key);
// localStorage.clear();


// localStorage.setItem('user', JSON.stringify({id: 1, name: 'kokos'}));

// let userJSON = localStorage.getItem('user');
// console.log(userJSON);
// let user = JSON.parse(userJSON);
// console.log(user);
// user.age = 31;
// console.log(user);
// localStorage.setItem('user', JSON.stringify(user));

// let users = [
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
//
// localStorage.setItem('users', JSON.stringify(users));

// let usersJSON = localStorage.getItem('users');
// console.log(usersJSON);
// let users = JSON.parse(usersJSON);
// console.log(users);
// users.push({});
// console.log(users);
// localStorage.setItem('users', JSON.stringify(users));

// localStorage.clear();
const productsDiv = document.getElementsByClassName('products')[0];
console.log(productsDiv);
let products = [

    {

        title: `milk`,

        price: 22,

        image: `https://www.firstchoiceproduce.com/wp-content/uploads/2020/03/whole-milk-800x800.jpg`

    },

    {

        title: `juice`,

        price: 27,

        image: `https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg`

    },

    {

        title: `tomato`,

        price: 47,

        image: `https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74`

    },

    {

        title: `tea`,

        price: 15,

        image: `https://th.bing.com/th/id/OIP.TMzrhqhf5sBJhcpcSx_O4QHaFj?r=0&o=7rm=3&rs=1&pid=ImgDetMain&cb=idpwebpc2`

    },

];

for (const product of products) {
    const productBlock = document.createElement('div');

    const title = document.createElement('h2')
    title.innerText = `${product.title} ${product.price} UAH`;

    const img = document.createElement('img');
    img.src = product.image;

    const button = document.createElement('button');
    button.innerText = 'add to cart';

    button.onclick = function () {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    productBlock.append(title, img, button);
    productsDiv.appendChild(productBlock);
}
// console.log(localStorage.getItem('cart'));
localStorage.getItem('cart');