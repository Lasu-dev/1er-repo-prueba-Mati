import React from "react";


/*Evolución del código
1° */

/*export const ProfileCard = (props) =>{
    console.log(props)
    return (
        <div>
            <h2> Nombre completo: {props.persona.nombre} {props.persona.apellido} Coso </h2>
            <span><strong>Edad:</strong>{props.persona.edad}</span>
            <h3>Ubicacion: {props.persona.ubicacion}</h3>
        </div>
    )
}*/

//2°

/*export const ProfileCard = (props) =>{
    const persona = props.persona 
    return (
        <div>
            <h2> Nombre completo: {persona.nombre} {persona.apellido} Coso </h2>
            <span><strong>Edad:</strong>{persona.edad}</span>
            <h3>Ubicacion: {persona.ubicacion}</h3>
        </div>
    )
}*/

// Yo sé que props es un objeto que tiene una propiedad llamada  persona, la voy a desestructurar:
//3°

export const ProfileCard = ({persona}) =>{ //cuando es un objeto VA CON LLAVES!! arrays con[]
    const {nombre, apellido, edad, ubicacion} = persona
    console.log(persona)
    return (
        <div>
            <h2> Nombre completo: {nombre} {apellido} Coso </h2>
            <span><strong>Edad:</strong>{edad}</span>
            <h3>Ubicacion: {ubicacion}</h3>
        </div>
    ) 
}
/* DESESTRUCTURACION: se pueden desestructurar objetos y arrays buena práctica: const pero se puede usar let
esta desestructuración va a a ser la mas usada y siempre se declara la desestructuración dentro del componente, es una variable local
las props lo van a llamar dentro del componente
Ej con objeto: 
    const {nombre, apellido, edad, ubicacion} = persona
Ej con array:
    const valores = ['valor_1', 'valor_2']; 
    desestructuración:
    const [valor_1, valor_2] = valores   

es una desestructuración posicional, 
si cambio de lugar valor 1 y valor me va a guardar valor 1 en valor 2 y viceversa:
Ej:

    const [valor_2, valor_1] = valores   

en valor_2 va a estar guardado valor_1 y viceversa 



*/