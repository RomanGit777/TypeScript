// fetch('https://dummyjson.com/products?limit=100')
//     .then(res => res.json())
//     .then(data => {
//         for (const {title,brand,price,thumbnail} of data.products) {
//           const div = document.createElement("div");
//           div.innerHTML = `
//            <h3> ${title} </h3>
//            <p> ${brand} </p>
//            <p> ${price} </p>
//            <img src="${thumbnail}" alt="" width="200">
//                           `;
//         document.body.appendChild(div);
//         }
//     });


let url = new URL('https://dummyjson.com/products');
url.searchParams.set('kiwi', 30)

fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));

