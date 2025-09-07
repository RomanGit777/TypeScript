type ProductsType = {
    title: string,
    price: number,
    image: string
}[];
let products : ProductsType = [
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
    document.write(`
    <div class="product-card">
        <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
        <img src="${product.image}" alt="" class="product-image"/>
    </div>`)
}
