let cartHTML = document.getElementById('cart')
const clearBtn = document.getElementById('clearCart')

recuperar()

function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('cart')) || []
    recuperarLS.forEach(element => {
        showCart(element)
    })
    const totalBuy = recuperarLS.reduce((acc, el) => acc + el.precio, 0)
    let p = document.getElementById('total1')
    p.innerText = `TOTAL: ${totalBuy}`
    console.log(totalBuy)
}



function showCart(addProduct) {

    let div = document.createElement('div')
    div.className = 'product';
    div.innerHTML = `<div class="card" style="width: 18rem;">
        <img src=${addProduct.imgurl} class="card-img-top" alt="Bozal de cuero, caballo carreras, salto exhibición y Polo">
        <!-- SEO, agregamos palabras clave caballo carreras, polo, salto  -->
        <div class="card-body">
            <h5 class="card-title">${addProduct.nombre}</h5>
            <p class="card-text">${addProduct.descripcion}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Stock: ${addProduct.stock}</li>    
            <li class="list-group-item">Precio $ ${addProduct.precio}</li>
            <li class="list-group-item">Talle: ${addProduct.size}</li>
            <div class="card-body">
                <button id="btnAdd${addProduct.cod}" type="button" class="btn btn-outline-secondary">quitar</button></a>
            </div>
        </div>`;
    cartHTML.appendChild(div)
}

/* clearBtn.addEventListener('click', () => {
    let cartEmpty = ""
    localStorage.setItem('cart', JSON.stringify(cartEmpty))
    showCart(addProduct)
}) */