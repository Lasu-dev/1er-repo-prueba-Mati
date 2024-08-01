import React from "react"


const PI = 3.14
const doSomething = ()=>{
    alert('Que frío')
}


// Si vamos a crear componentes en nuestro archivo es necesario que si o si la extension sea .jsx, por que vamos a usar esa sintaxis
//como asi tambien al tener esa extension se debe importar React from 'react' como buena práctica
const Titulos = ()=>{
    return(
        <>
        <h1>Soy de const Titulos</h1>
        <h2>Yo también</h2>
        </>
    )
}




export {PI, doSomething, Titulos}
