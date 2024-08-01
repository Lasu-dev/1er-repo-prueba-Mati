import React from 'react'// SI DICE JSX LO IMPORTAMOS!!!!
import { PI, doSomething, Titulos } from '../funciones'//lo exporto don esté, y lo puedo importar desde cualquier archivo
import { Carrito } from './Components/Carrito/Carrito'

console.log(PI)
doSomething()


function App() {
  return (
    <div>
      <h1>Hola desde react</h1>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <Carrito />
      <Titulos />


    </div>
  )
}

const ProductCard = () => {
  return (
    <>{/*esto es un fragmento pata evitar poner un div padre de ambos divs hijos, no se pueden poner hermanos en react sin padres*/}
      <div>
        <h3>Titulo producto</h3>
        <span>Precio: $value</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, non laborum quam sit,
          explicabo numquam excepturi voluptatum ipsam in iusto praesentium rem perspiciatis, blanditiis
          fugit inventore necessitatibus reprehenderit animi natus.</p>
        <button>Comprar</button>
      </div>
      <div>
        <button>like</button>
        <button>dislike</button>
      </div>
    </>
  )
}

/* 
Crear un componente llamado Carrito

El componente carrito tendra un h1 que dira 'Carrito de compras'

Luego crear otro componente llamado Item
El componente Item tendra la sig estructura
<div>
    <h2>nombre producto</h2>
    <span>Cantidad: x</span>
    <button>Eliminar</button>
</div>

Mostrar el Carrito en el componente App

*/




export default App
