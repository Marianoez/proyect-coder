const allProducts = [{ cod: 1, nombre: 'Bozal de Cuero', size: '1', descripcion: 'Bozal de cuero, con hebillas cromadas, disponibles en 3 tamaños.', imgurl: '../assets/Corregidas/bozal-okk.jpg', precio: 3200, stock: 5 },
    { cod: 2, nombre: 'Bozal de Cuero', size: '2', descripcion: 'Bozal de cuero, con hebillas cromadas, disponibles en 3 tamaños.', imgurl: '../assets/Corregidas/bozal-okk.jpg', precio: 3300, stock: 2 },
    { cod: 3, nombre: 'Bozal de Cuero', size: '3', descripcion: 'Bozal de cuero, con hebillas cromadas, disponibles en 3 tamaños.', imgurl: '../assets/Corregidas/bozal-okk.jpg', precio: 3500, stock: 3 },
    { cod: 4, nombre: 'Freno de Hierro', size: '1', descripcion: 'Freno de hierro cromado con rueda.', imgurl: '../assets/Corregidas/freno-ok.png', precio: 4000, stock: 4 },
    { cod: 5, nombre: 'Freno de Hierro', size: '2', descripcion: 'Freno de hierro cromado con rueda.', imgurl: '../assets/Corregidas/freno-ok.png', precio: 4000, stock: 4 },
    { cod: 6, nombre: 'Montura de Cuero', size: '1', descripcion: 'Montura de cuero americana, con estriberas.', imgurl: '../assets/Corregidas/montura-ok.png', precio: 30000, stock: 4 },
    { cod: 7, nombre: 'Montura de Cuero', size: '2', descripcion: 'Montura de cuero americana, con estriberas.', imgurl: '../assets/Corregidas/montura-ok.png', precio: 31500, stock: 6 },
    { cod: 8, nombre: 'Herraduras de Hierro', size: '1', descripcion: 'Herraduras de hierro varios talles', imgurl: '../assets/Corregidas/herradura-ok.jpg', precio: 2500, stock: 5 },
    { cod: 9, nombre: 'Herraduras de Hierro', size: '2', descripcion: 'Herraduras de hierro varios talles', imgurl: '../assets/Corregidas/herradura-ok.jpg', precio: 2500, stock: 5 },
    { cod: 10, nombre: 'Herraduras de Hierro', size: '3', descripcion: 'Herraduras de hierro varios talles', imgurl: '../assets/Corregidas/herradura-ok.jpg', precio: 2500, stock: 5 },
    { cod: 11, nombre: 'Herraduras de Hierro', size: '4', descripcion: 'Herraduras de hierro varios talles', imgurl: '../assets/Corregidas/herradura-ok.jpg', precio: 2500, stock: 5 },
    { cod: 12, nombre: 'OFERTA RIENDAS', size: 'Discontinuos', descripcion: 'Oferta semanal de Rienda y cabezada de cuero, 50% OFF!', imgurl: '../assets/oferta-rienda-ok.png', precio: 3500, stock: 12 },
    { cod: 13, nombre: 'OFERTA HERRADURAS', size: 'Discontinuos', descripcion: 'Oferta semanal Herraduras de Aluminio, Súper livianas, números discontinuos', imgurl: '../assets/oferta-herraduras.jpg', precio: 2800, stock: 7 },
    { cod: 14, nombre: 'OFERTA MANTA', size: 'Discontinuos', descripcion: 'Manta doble tela para exteriores, todas las estaciones.', imgurl: '../assets/oferta-manta.jpg', precio: 5800, stock: 8 },
    { cod: 15, nombre: 'OFERTA COMEDERO', size: 'Discontinuos', descripcion: 'Comedero PVC inyectado origen USA, ultimas unidades.', imgurl: '../assets/oferta-comedero.jpg', precio: 13000, stock: 4 },
];


const productContainer = document.getElementById("product-main")
const searcher = document.getElementById('find')
const showOffers = document.getElementById('showOffer')
const showAll = document.getElementById('showAll')



function showAllp(products) {
    productContainer.innerHTML = "";
    products.forEach(element => {
        let div = document.createElement('div')
        div.className = 'product';
        div.innerHTML = `<div class="card" style="width: 18rem;">
        <img src=${element.imgurl} class="card-img-top" alt="Bozal de cuero, caballo carreras, salto exhibición y Polo">
        <!-- SEO, agregamos palabras clave caballo carreras, polo, salto  -->
        <div class="card-body">
            <h5 class="card-title">${element.nombre}</h5>
            <p class="card-text">${element.descripcion}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Stock: ${element.stock}</li>    
            <li class="list-group-item">Precio $ ${element.precio}</li>
            <li class="list-group-item">Talle: ${element.size}</li>
            <div class="card-body">
                <button id="btnAdd${element.cod}" type="button" class="btn btn-outline-secondary">Agregar al Carrito!</button></a>
            </div>
        </div>`;

        productContainer.appendChild(div);
        let btnAdd = document.getElementById(`btnAdd${element.cod}`)
        console.log(element.cod)
        console.log(btnAdd)
        console.log(btnAdd);

    });
}
showAllp(allProducts);

searcher.addEventListener('input', (product) => {
    let searching = allProducts.filter(element => element.nombre.toLocaleLowerCase().includes(product.target.value.toLocaleLowerCase()))
    showAllp(searching)
});

showOffers.addEventListener('click', () => {
    let sOnlyOffer = allProducts.filter(element => element.nombre.includes('OFERTA'))
    showAllp(sOnlyOffer);
})

showAll.addEventListener('click', () => {
    showAllp(allProducts);
})



































/* let contacto1 = document.getElementsByClassName('footer');
contacto1[0].remove(); */

/* class Producto {
    constructor(cod, nombre, descripcion, imagenurl, precio, stock) {
        this.cod = cod;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imgurl = imagenurl;
        this.precio = Number(precio);
        this.stock = stock;
    }
    precioFinal() {
        return this.precio * 1.21;
    }
} */