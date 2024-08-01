import React, { useState } from 'react';
import { ProfileCard } from './ProfileCard'
import { ColorCardList } from './Components/ColorCardList/ColorCardList';
import { Contador } from './Contador/Contador'
import { NewColorCardForm } from './Components/NewColorCardForm/NewColorCardForm';

import { ColorItemList } from './Components/ColorCard/ColorCard'





//let nombre = 'pepe'
const obtenerApellido = () => 'garcia'
const sumar = () => 2 + 2


/*
//voy a hacer un array con estos elementos para poder iterar con .map y componetizarlo 
const card_1 = {
  likes: 3,
  fecha: '1 hour',
  colores: ['#153448', ' #3C5B6F', '#005B41', '#008170'],
}
const card_2 = {
  likes: 132,
  fecha: 'Yesterday',
  colores: ['#667BC6', '#FDFFD2', '#FFB4C2', '#DA7297'],
}
const card_3 = {
  likes: 184,
  fecha: '2 days',
  colores: ['#F5F7F8', '#F4CE14', '#379777', '#45474B'],
}
const card_4 = {
  likes: 416,
  fecha: '3 days',
  colores: ['#071952', '#088395', '#37B7C3', '#EBF4F6'],
}*/

const persona_1 = {
  nombre: 'pepe',
  apellido: 'cramer',
  edad: 89,
  ubicacion: 'calle 123'
}

const persona_2 = {
  nombre: 'juanito',
  apellido: 'ruiz',
  edad: 48,
  ubicacion: 'Av. Scal 123'
}

//ahora que ya tengo un array con las colors cards la idea es no repetir el llamado a color card como en la sintaxis anterior linea 87
//tenemos que mapear este array para transformarlo en un array de JSX, y eso lo hacemos con otro componente que reciba el array de colores
//por props y retorne el JSX (componente ColorCardList en ColorCard.jsx va a recibir el array de colores y a partir de ese array va a 
//generar las cartas de colores) Como mando el array a ColorCard.jsx? creo allí la const ColorCardList que ejecuta el mapeo y la exporto



//____----ACA EN App ESTÁ EL ARRAY, ENTONCES ACÁ INSTANCIAMOS A ColorCardList-----_____ 
const colors_card_info = [
  {
    likes: 179,
    fecha: '3 months',
    colores: ['#153448', ' #3C5B6F', '#005B41', '#008170'],

  },
  {
    likes: 247,
    fecha: '17 hours',
    colores: ['#2A0944', '#3FA796', '#FEC260', '#A10035'],

  },
  {
    likes: 748,
    fecha: '7 days',
    colores: ['#030637', '#3C0753', '#720455', '#910A67'],

  },
  {
    likes: 416,
    fecha: '19 days',
    colores: ['#191919', '#750E21', '#E3651D', '#BED754'],

  }

]

//DE LA CLASE 26, VAMOS A CREAR UN ESTADO DEL ARRAY DE LAS COLORCARDINFO CREAR CARTAS DE COLORES  Y QUE SE VAYAN MOSTRANDO EN LA PAGINA








//let contador = 1 //bueno esto no nos va a mostrar el incremento en nuestro HTML por que react cada vez que pueda evitar re-renderizarse 
//lo evita, aunque si lo muestra por consola cuando consologueamos, ahora tenemos que hacer un estado: 
/*Usamos useState() para crear un estado */

//en el mismo lugar que tengo declarado el array tengo que instanciar al componente
const App = () => {

  const [colorCardInfo, setColorCardINfo] = useState(colors_card_info)// el estado se llama contador, y el valor inicial es el array

  const handleSubmitNewColorCard = (e) => {
    e.preventDefault()
    const newColorCard = {
      colores: [],
      likes: 0,
      fecha: e.target.fecha.value,
      id: 7
    }
    for (let i = 1; i <= 4; i = i + 1) {
      newColorCard.colores.push(e.target['color-' + i].value)
    }
    //esto es identico al .push pero para los estados se hace asi :
    setColorCardINfo([...colorCardInfo, newColorCard])//DE LO QUE VALIA ANTERIORMENTE HAY QUE ENVIAR UNO NUEVO [...coloCardInfo]
                                                      //esta sintaxis lo que hace es sacarle una copia al array y le agrega un elemento 
                                                      //nuevo, y ese nuevo elemento se agrega al final del array.
  }
  return (
    <>
      <div>
        <ProfileCard
          persona={persona_1} />
        <ProfileCard
          persona={persona_2} />
      </div>
      <section className="color-card">
        <ColorCardList cartas_de_colores={colorCardInfo} />
        <NewColorCardForm handleSubmitNewColorCard={handleSubmitNewColorCard} />
      </section>

      {/* (esto es de la clase 26) NO usar a document al menos que sea ESTRICTAMENTE NECESARIO       */}
      {/* {/* <div>
      <span>Contador: {valor}</span>
      <button onClick={incrementar}>Incrementar</button> 
      </div> */}
      <Contador limit={10} />

    </>
  )
}


{/* ya no necesito esta sintaxis por que tengo que iterar en el array de elementos ahora, a continuacion nueva sintaxis
      <section className="color-card">
        <ColorCard card={card_1} />
        <ColorCard card={card_2} />
        <ColorCard card={card_3} />
        <ColorCard card={card_4} />
      </section> */}




/*Ejemplo de como renderizar con .map:
const personas = [ 'pepe', 'juan', ''maria',]
const listaJSXPersonas = personas.map((persona)=>{
  return (
  <div>{persona}</div>
  )
  }) */


  {/*___________________________________________________

  1er ejercicio
Crear un componente contador que renderize:

boton de decrementar
span con valor de contador
boton de incrementar

2da parte
El decrementar no debe bajar a menos de 1

3era parte
El incrementar debera estar limitado por una prop llamada limit que recibira el contador


<Contador limit={10}/>

Tarea:
Agregar a la aplicacion de chat la funcionalidad de escribir nuevos mensajes


*/}








export default App
