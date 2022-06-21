const allProductos = [{ cod: 1, nombre: 'Bozal de Cuero', descripcion: 'Bozal de cuero, con hebillas cromadas, disponibles en 3 tamaños.', imgurl: '../assets/Corregidas/bozal-okk.jpg', precio: 3500, stock: 2 }, { cod: 2, nombre: 'Freno de Hierro', descripcion: 'Freno de hierro cromado con rueda.', imgurl: '../assets/Corregidas/freno-ok.png', precio: 4000, stock: 4 }, { cod: 3, nombre: 'Montura de Cuero', descripcion: 'Montura de cuero americana, con estriberas.', imgurl: '../assets/Corregidas/montura-ok.png', precio: 30000, stock: 4 }, { cod: 4, nombre: 'Herraduras de Hierro', descripcion: 'Herraduras de hierro varios talles', imgurl: '../assets/Corregidas/herradura-ok.jpg', precio: 2500, stock: 5 }, ];

function showAllp() {
    const a = document.getElementById('productosmain2');
    console.log(a);
    const c = document.createElement("div");
    console.log(c);
    a.appendChild(c);
    c.setAttribute("id", "wtf");

    for (let element of allProductos) {
        const b = document.createElement('div');
        b.innerHTML = `<div class="card" style="width: 18rem;">
        <img src=${element.imgurl} class="card-img-top" alt="Bozal de cuero, caballo carreras, salto exhibición y Polo">
        <!-- SEO, agregamos palabras clave caballo carreras, polo, salto  -->
        <div class="card-body">
            <h5 class="card-title">${element.nombre}</h5>
            <p class="card-text">${element.descripcion}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Stock: ${element.stock}</li>    
            <li class="list-group-item">Precio $ ${element.precio}</li>
            <div class="card-body">
                <button id="btnAdd${element.cod}" type="button" class="btn btn-outline-secondary">Agregar al Carrito!</button></a>
            </div>
        </div>`;
        c.appendChild(b);

        let btnAgregar = document.getElementById(`btnAdd${element.cod}`)
        btnAgregar.addEventListener("click", () => {

        })
    }
}

function ocultarProductos() {
    const ab = document.getElementById("wtf");
    console.log(ab)
    ab.remove();
}


const saBtn = document.getElementById('showAll');
console.log(saBtn);


saBtn.addEventListener('click', showAllp)

const haBtn = document.getElementById('hideAll');
console.log(haBtn);

haBtn.addEventListener("click", ocultarProductos)
































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