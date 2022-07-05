/* import { getData } from "./getData";
 */

const allProducts = [{ cod: 1, nombre: 'Bozal de Cuero', size: '1', descripcion: 'Bozal de cuero, con hebillas cromadas, disponibles en 3 tamaños.', imgurl: '../assets/Corregidas/bozal-okk.jpg', precio: 3200, stock: 5, cantidad: 0 },
    { cod: 2, nombre: 'Bozal de Cuero', size: '2', descripcion: 'Bozal de cuero, con hebillas cromadas, disponibles en 3 tamaños.', imgurl: '../assets/Corregidas/bozal-okk.jpg', precio: 3300, stock: 2, cantidad: 0 },
    { cod: 3, nombre: 'Bozal de Cuero', size: '3', descripcion: 'Bozal de cuero, con hebillas cromadas, disponibles en 3 tamaños.', imgurl: '../assets/Corregidas/bozal-okk.jpg', precio: 3500, stock: 3, cantidad: 0 },
    { cod: 4, nombre: 'Freno de Hierro', size: '1', descripcion: 'Freno de hierro cromado con rueda.', imgurl: '../assets/Corregidas/freno-ok.png', precio: 4000, stock: 4, cantidad: 0 },
    { cod: 5, nombre: 'Freno de Hierro', size: '2', descripcion: 'Freno de hierro cromado con rueda.', imgurl: '../assets/Corregidas/freno-ok.png', precio: 4000, stock: 4, cantidad: 0 },
    { cod: 6, nombre: 'Montura de Cuero', size: '1', descripcion: 'Montura de cuero americana, con estriberas.', imgurl: '../assets/Corregidas/montura-ok.png', precio: 30000, stock: 4, cantidad: 0 },
    { cod: 7, nombre: 'Montura de Cuero', size: '2', descripcion: 'Montura de cuero americana, con estriberas.', imgurl: '../assets/Corregidas/montura-ok.png', precio: 31500, stock: 6, cantidad: 0 },
    { cod: 8, nombre: 'Herraduras de Hierro', size: '1', descripcion: 'Herraduras de hierro varios talles', imgurl: '../assets/Corregidas/herradura-ok.jpg', precio: 2500, stock: 5, cantidad: 0 },
    { cod: 9, nombre: 'Herraduras de Hierro', size: '2', descripcion: 'Herraduras de hierro varios talles', imgurl: '../assets/Corregidas/herradura-ok.jpg', precio: 2500, stock: 5, cantidad: 0 },
    { cod: 10, nombre: 'Herraduras de Hierro', size: '3', descripcion: 'Herraduras de hierro varios talles', imgurl: '../assets/Corregidas/herradura-ok.jpg', precio: 2500, stock: 5, cantidad: 0 },
    { cod: 11, nombre: 'Herraduras de Hierro', size: '4', descripcion: 'Herraduras de hierro varios talles', imgurl: '../assets/Corregidas/herradura-ok.jpg', precio: 2500, stock: 5, cantidad: 0 },
    { cod: 12, nombre: 'OFERTA RIENDAS', size: 'Discontinuos', descripcion: 'Oferta semanal de Rienda y cabezada de cuero, 50% OFF!', imgurl: '../assets/oferta-rienda-ok.png', precio: 3500, stock: 12, cantidad: 0 },
    { cod: 13, nombre: 'OFERTA HERRADURAS', size: 'Discontinuos', descripcion: 'Oferta semanal Herraduras de Aluminio, Súper livianas, números discontinuos', imgurl: '../assets/oferta-herraduras.jpg', precio: 2800, stock: 7, cantidad: 0 },
    { cod: 14, nombre: 'OFERTA MANTA', size: 'Discontinuos', descripcion: 'Manta doble tela para exteriores, todas las estaciones.', imgurl: '../assets/oferta-manta.jpg', precio: 5800, stock: 8, cantidad: 0 },
    { cod: 15, nombre: 'OFERTA COMEDERO', size: 'Discontinuos', descripcion: 'Comedero PVC inyectado origen USA, ultimas unidades.', imgurl: '../assets/oferta-comedero.jpg', precio: 13000, stock: 4, cantidad: 0 },
];


const productContainer = document.getElementById("product-main")
const searcher = document.getElementById('find')
const showOffers = document.getElementById('showOffer')
const showAll = document.getElementById('showAll')
const cartDiv = document.getElementById('cart')
const productCart = document.getElementById("items-compra")
const cart = []


recuperar()

function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('cart')) || []
    recuperarLS.forEach(element => {
        cart.push(element)
    })
}




function showAllp(products) {
    productContainer.innerHTML = "";
    products.forEach(element => {
        let newDiv = document.createElement('div')
        newDiv.className = 'product';
        newDiv.innerHTML = `<div class="card" style="width: 18rem;">
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
                <button id="btnAdd1${element.cod}" type="button" class="btn btn-outline-secondary">Agregar al Carrito!</button></a>
            </div>
        </div>`;

        productContainer.appendChild(newDiv);
        let btnAdd = document.getElementById(`btnAdd1${element.cod}`)
        btnAdd.addEventListener('click', () => {
            /* Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Producto agregado con exito!',
                showConfirmButton: false,
                timer: 1500
            }) */
            addToCart(element.cod)
        })

    });
}
showAllp(allProducts);

searcher.addEventListener('input', (product) => {
    let searching = allProducts.filter(element => element.nombre.toLocaleLowerCase().includes(product.target.value.toLocaleLowerCase()))
    if (searching == false) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `No existe producto que coincida con su busqueda, pruebe otra referencia!`,
        })
    }
    showAllp(searching)
});

showOffers.addEventListener('click', () => {
    let sOnlyOffer = allProducts.filter(element => element.nombre.includes('OFERTA'))
    showAllp(sOnlyOffer);
})

showAll.addEventListener('click', () => {
    showAllp(allProducts);
})

function addToCart(cod) {
    let existe = cart.find(item => item.cod === cod)
    if (existe) {
        if (existe.stock == 0) {
            existe.stock = 0
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Producto sin Stock Disponiblle!`,
            })
            let btnAdd = document.getElementById(`btnAdd1${existe.cod}`)
            btnAdd.style.display = 'none'
        } else {
            existe.cantidad += 1
            existe.stock--
                console.log(existe.stock);
            showAllp(allProducts)
        }

    } else {
        let addProduct = allProducts.find(item => item.cod === cod)
        console.log(addProduct.cantidad)
        console.log(addProduct.stock)
        if (addProduct.stock > 0) {
            addProduct.cantidad = addProduct.cantidad + 1;
            addProduct.stock--
                cart.push(addProduct)
            showAllp(allProducts)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Producto sin Stock Disponiblle!`,
            })
        }
    }


    localStorage.setItem('cart', JSON.stringify(cart))
        // console.log(addProduct.cantidad)







    /* let addProduct = allProducts.find(item => item.cod === cod)
    console.log(addProduct);
    cart.push(addProduct);
    localStorage.setItem('cart', JSON.stringify(cart)) */
}

/* const resp = await fetch("/data.json")
    .then(res => res.json())
    .then(data => {console.log(data)})




const pedirPosts = async ()=> {
    const resp = await fatch('https://jsonplaceholder.typicode.com/posts)'
    const data = await resp.json()
    console.log(data)
}





 */