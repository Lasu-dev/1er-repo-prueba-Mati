-como crear un componente
-como exportar e importar componentes
-como invocar o instanciar componentes
-que son las dependencias y como se instalan (las que vienen por defecto, instalar nuevas dependencias nuevas no sabemos aun)
-diferenciar a una funcion de un componente:
RESPUESTAS:

1)-como crear un componente?
Un componente es una función que retorna HTML, o mejor dicho JSX, se la debe crear con mayúscula.

const Nombre = () => {
    return (
        <h2 className='subtitulo'>pepe</h2>
    )
}

2da forma:

function Nombre () {
    return(
        <h3> Hola </h3>
    )
}


2)-como exportar e importar componentes?

/components/boton.jsx
codigo:
import React from 'react'

1era forma de exportar

export const Boton = () => {
    return (
        <button>Mi boton</button>
    )
}

2da forma de exportar

const Boton = () => {
    return (
        <button>Mi boton</button>
    )
}

export {Boton}


-------------------------------------------------------------------------------------
/screen/HomeScreen.jsx
codigo:

import React from 'react'
import {Boton} from '../components/boton.jsx'

const HomeScreen = () => {
    return (
        <main>
            <Boton/>
        <main>
    )
}


-------------------------------------------------------------------------------------


-como invocar o instanciar componentes?

/pages/Contact.jsx

import React from 'react'
import {ContactForm} form './components/ContactForm.jsx'

const ContactPage = () => {
    return (
        <h1>Formulario de contacto</h1>
        <!-- Aqui debes instanciar el formulario de contacto -->
        <ContactForm/><!-- Asi se instancia el componente -->
    )
} 