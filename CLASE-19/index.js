//Document es una variable global de JS que representa como objeto a nuestro HTML 
//(.dir nos muestra nuestro HTML en formato objeto)

/*console.dir(document)

//Este es el tema que estamos aprendiendo ahora:
//DOM = document object model (es una representación del HTML como objeto) 

//metodo que nos permite tener un elemento por su id
const titulo = document.getElementById("titulo") //es un HTMLElement, (son objetos con propiedades unicas)
const subtitulo = document.getElementById("subtitulo") // => null si no lo encuentra
console.dir(titulo)

titulo.innerText = 'pepe'//este pepe va a ser ahora el título, modificado desde JS por que innerText es una de las propiedades unicas 

//si yo modifico una propiedad de mi documento se refleja en la página pero no en codigo html

const caja = document.getElementById('producto')

caja.innerText = '<h1> Tv Samsung </h1>' //lo muestra como string por que le estamos pasando un string
caja.innerHTML = '<h1> Tv Samsung </h1>' //lo muestra como titulo por que innerHTML lee en html y se muestra como h1 ademas, tremendo

const producto = {
    precio: 1000,
    nombre: 'tv samsung',
    descripcion: 'lorem ipsum'
}

caja.innerHTML = `
<h1>${producto.nombre} </h1>
<p>${producto.descripcion}</p>
<span>Precio:$${producto.precio}</span> 
<div>
<input value ='${producto.precio}'>
    <button>comprar</button>
</div>    
`



//Asi se creaba antes un elemento (no se hace esto ahora es mala práctica, pero si lo vemos ya sabemos que está haciendo)
//Se podría hacer así, pero lo mejor es hacerlo dentro de un <span> dentro de mi caja en HTML <button>comprar</button> 
//hay casos muy puntuales en los que conviene usar document.createElements, pero es totalmente reemplazable

/*const buttonProduct = document.createElement('button') //creamos un botón (const buttonProduct)
buttonProduct.innerText = 'comprar' //al boton, le creamos un texto (.innerText)
console.dir(buttonProduct) // el dir nos muestra el elemento button en su fotmato objetoHTML..

//que puedo hacer con el elemento button? por ejemplo puedo añadirlo a mi caja producto 

caja.appendChild(buttonProduct) */ //se creaba una caja contenedora y dentro se agregaban los elementos, esto requiere mucho proceso, 
//en cambio en el parrafo de codigo anterior, con caja.innerHTML= ( backstiks y template literals) hacemos una plantilla
//y ahi vamos agragando a nuestra página todo lo que queramos, OK??????

/*
const user = {
    username: 'Pepesito',
    password: '******4',
    adress: 'Av. siempre viva',
    email: 'pepe@gmail.com'
}


/* 
Generar a partir del usuario el sig html

h2 username
span password
adress input (y el valor debe ser la direccion),
input (y el valor debe ser el email)
*/
/*
const usuarioInfo = document.getElementById('userinfo')


usuarioInfo.innerHTML = `
<form>
<h2>Nombre:${user.username} </h2>
<span>Password:${user.password}</span> 
<div>
Adress: <input type="text" value = '${user.adress}'> 
</div>
<div>
Email: <input type="email" value = '${user.email}'>
</div>
</form>
`

//hasta acá aprendimos como renderizar un solo elemento (el objeto usuario), si yo tuviera un array de productos, por ejemplo, 
// como haría para renderizarlos? eh?? como??? 
//Así:
//vamos a hacer en nuestro HTML un div con el id "products-container"

const products = [
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    },
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    },
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    },
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    }
]
*/
/* como funciona el .getElementById, va a ir a buscar en el document (HTML) el elemento con el id que le pasemos y si lo encuentra
lo va a retornar como objeto HTML guardandolo en la variable que creamos para tal fin
*/
/*
// 1° llamamos al contenedor de nuestros productos
const productsContainerHTML = document.getElementById('products-container')//en esta const estamos guardanco un objeto HTML 
// es de buena práctica diferenciarla de las demás variables con el HTML en mayúsculas al final
//Ahora vamos a crear un array de productos arriba ↑: 

// 2° creamos una variable que va a ir acumulando el HTML
let productsList = ''    // ya conocemos al acumulador

//3° voy recorriendo el array de productos y por cada producto voy a crear este templete string y voy acumulando en la plantilla de productos
for (const producto of products) { // ya conocemos al bucle for of y acá por cada const producto del array products, vamos a pasarle
    // la plantilla del producto ya sabemos como `` y ${}

    productsList = productsList + `
        <h1>${producto.nombre} </h1>
        <p>${producto.descripcion}</p>
        <span>Precio:$${producto.precio}</span> 
        <div>
            <input value ='${producto.precio}'>
            <button>comprar</button>
        </div>  
    `
}
//4° una vez que tengo todos los productos agregados lo puedo ver por consola y ya puedo renderizarlo
console.log(products) // aca nos va a mostrar por consola el array de productos

//5° lo renderizo: ahora que tengo todos los productos en la variable productList, recién ahora la puedo meter en el HTML
//en el  productListContainerHTML, que es el div con el id 'product-list' de mi HTML, voy a insertar(.innerHTML) el productsList
//que es ahora, la lista de productos que me devolvió el for of
productsContainerHTML.innerHTML = productsList

/*
Cuando menos toquemos el document mas rendimiento va a tener la página, por eso es mejor que en el bucle esté solo que queremos acumular,
y las variables las creamos y llamamos por fuera.
*/

// VAMOS A TRABAJAR SOBRE ESTA TECNICA:

const historial = [
    {
        id: '001',
        nombre: 'Tv Samsung',
        fecha: '17/09/2020'
    },
    {
        id: '022',
        nombre: 'Macbook',
        fecha: '14/10/2020'
    },
    {
        id: '030',
        nombre: 'Celular motorola',
        fecha: '17/09/2021'
    },
    {
        id: '301',
        nombre: 'Zapatillas nike',
        fecha: '30/09/2023'
    },
]

const productosHistorialHTML = document.getElementById("container-elementos")

let elementosRandom = ''

for (const item of historial) {

    elementosRandom = elementosRandom + `
    <div class="historial-item">
        
            <span>ID: ${item.id}</span>
            <h3>Producto: ${item.nombre}</h3>
            <span>Fecha: ${item.fecha}</span>
            <br>
            <hr>
            
    </div>
`
}

productosHistorialHTML.innerHTML = elementosRandom
console.log(elementosRandom)

//SALIÓ MUY BIEN ESTE EJERCICIO!! BIEN MARTA

//VAMOS A VER OTRAS FORMAS DE LLAMAR A UN ELEMENTO DE HTML, hasta ahora lo estamos llamando por su id, podríamos llamarlo por su clase
//con .querySelector tanto con el selector de clase (.) como con el selector de id (#), si nuestro elemento tiene un id, es preferible 
//llamarlo con .getElementById por que llamada es mas directa, solo lo vamos usar para llamar elementos con class
//Si tengo muchos elementos con la misma clase va a llamar a la primera.
//Si yo quiero obtener todos los elementos que tengan la misma clase los llamo con document.getElementByCLassName, y va a aparecer un
// HTML collection, parece un array pero es un objeto, vamos a verlo:

const historialItemHTML = document.getElementsByClassName('historial-item')

console.log(historialItemHTML)
for (const item of historialItemHTML) {
    const btn = document.createElement('button')
    btn.innerText = 'Ver más'
    item.appendChild(btn)
}
//esto no lo vamos a usar asi, es solo a modo demostración, hay mejores formas de poner un botón

// esta el document.queryselectorAll() hace lo mismo que el document.getElementsByClassName

const input = document.getElementById('input')

//accedo al valor del input
/*console.log(input.value)*/

//Añado la class rojo al elemento input
/* input.classList.add('rojo') *///agrega la clase que le indicamos

//eliminamos una clase
/* input.classList.remove('input') *///elimina la clase que le indicamos

//hacer un interruptor de clase ( si esta la clase la eliminamos si no esta la agregamos)
input.classList.toggle('mostrar')//si la encuentra la elimina, si no la encuentra la agrega


/* input.classList.replace('mostrar', 'ocultar') *///reemplaza mostrar por ocultar

/* Alternar entre clases */
/*if(input.classList.value.split(' ').includes('mostrar')){//value me trae el string de las clases, con este string  podemos hacer un .split por espacios ' ' para poder obtener un array
    input.classList.replace('mostrar', 'ocultar')            // de strings, luego al array de string le hacemos un includes y verificamos, si esta incluido mostrar,
}
else{
    input.classList.replace('ocultar','mostrar' )//sino lo hacemos al revés
} */

//accedo al objeto de lista de clases del input
/* console.log(input.classList)
 */

const modalHTML = document.querySelector('.modal-container')
const btnOpenHTML = document.getElementById('btn-open')

btnOpenHTML.onclick = function () {
    modalHTML.classList.toggle('ocultar')
}

