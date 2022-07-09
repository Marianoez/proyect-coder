/* const { forEach } = require("lodash"); */

let cartHTML = document.getElementById('cart')
const clearBtn = document.getElementById('clearCart')
const payBtn = document.getElementById('payBtn')

clearBtn.addEventListener('click', () => {
    cleanCart();
})
let cart = []
recuperar()


payBtn.addEventListener('click', () => {
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'MUCHAS GRACIAS POR SU COMPRA!!',
        showConfirmButton: false,
        timer: 1500
    })
    cart = []
    localStorage.setItem('cart', JSON.stringify(cart))
    recuperar()
    cartHTML.innerHTML = ""

})


function recuperar() {
    cartHTML.innerHTML = ""
    let recuperarLS = JSON.parse(localStorage.getItem('cart')) || []
    recuperarLS.forEach(element => {
        showCart(element)
        cart.push(element)
    })
    totalCarrito()

}

function totalCarrito() {
    const totalBuy = cart.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)
    let p = document.getElementById('total1')
    p.innerText = `TOTAL: ${totalBuy}`

}

function cleanCart() {
    localStorage.clear()
    totalCarrito()
    recuperar()
}

function showCart(car) {

    let div = document.createElement('div')
    div.className = 'product';
    div.innerHTML = `<div class="card" style="width: 18rem;">
                <img src=${car.imgurl} class="card-img-top" alt="Bozal de cuero, caballo carreras, salto exhibición y Polo">
                <!-- SEO, agregamos palabras clave caballo carreras, polo, salto  -->
                <div class="card-body">
                    <h5 class="card-title">${car.nombre}</h5>
                    <p class="card-text">${car.descripcion}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" id="cant${car.cod}">Cantidad: ${car.cantidad}</li>    
                    <li class="list-group-item">Precio $ ${car.precio}</li>
                    <li class="list-group-item">Talle: ${car.size}</li>
                    <div class="card-body">
                        <button id="btnDelete${car.cod}" type="button" class="btn btn-outline-secondary">quitar</button></a>
                    </div>
                </div>`;
    cartHTML.appendChild(div)

    let btnDelete = document.getElementById(`btnDelete${car.cod}`)





}