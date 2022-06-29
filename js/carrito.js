let cartHTML = document.getElementById('cart')
const clearBtn = document.getElementById('clearCart')

let cart = []
recuperar()


function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('cart')) || []

    recuperarLS.forEach(element => {
        cart.push(element)

        showCart(element)
        modals(element)

    })
    const totalBuy = recuperarLS.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)
    let p = document.getElementById('total1')
    p.innerText = `TOTAL: ${totalBuy}`
    console.log(totalBuy)
}




function showCart(car) {
    cartHTML.innerHTML = ""
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
                    <li class="list-group-item">Cantidad: ${car.cantidad}</li>    
                    <li class="list-group-item">Precio $ ${car.precio}</li>
                    <li class="list-group-item">Talle: ${car.size}</li>
                    <div class="card-body">
                        <button id="btnDelete${car.cod}" type="button" class="btn btn-outline-secondary">quitar</button></a>
                    </div>
                </div>`;
    cartHTML.appendChild(div)

    let btnDelete = document.getElementById(`btnDelete${car.cod}`)

    btnDelete.addEventListener('click', () => {
        console.log(car.cod);
        if (car.cantidad == 1) {
            btnDelete.parentElement.parentElement.parentElement.remove();
            cart = cart.filter(item => item.cod !== car.cod)
            localStorage.setItem('cart', JSON.stringify(cart))
            recuperar()
        } else {
            car.cantidad -= 1
            localStorage.setItem('cart', JSON.stringify(cart))
            recuperar()
        }
    })

}
console.log(cart);

function modals(car) {
    let modal = document.getElementById('cuerpoModal')

    let div = document.createElement('div')
    div.className = 'product';
    div.innerHTML = `<div class="card" style="width: 18rem;">
                <!-- SEO, agregamos palabras clave caballo carreras, polo, salto  -->
                <div class="card-body">
                    <h5 class="card-title">${car.nombre}</h5>
                    <p class="card-text">${car.descripcion}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Cantidad: ${car.cantidad}</li>    
                    <li class="list-group-item">Precio $ ${car.precio}</li>
                    <li class="list-group-item">Talle: ${car.size}</li>
                    <div class="card-body">
                        <button id="btnAdd${car.cod}" type="button" class="btn btn-outline-secondary">quitar</button></a>
                    </div>
                </div>`;
    modal.appendChild(div)
}

// cart.filter(item => item.cod !== btn.cod)
// localStorage.setItem('cart', JSON.stringify(cart))



// localStorage.clear()
// cart = []
// sweetAlert ==> compra finalizada! nro de Orden:09s8df09s7f0s7df0sd70




/* clearBtn.addEventListener('click', () => {
    let cartEmpty = ""
    localStorage.setItem('cart', JSON.stringify(cartEmpty))
    showCart(addProduct)
}) */