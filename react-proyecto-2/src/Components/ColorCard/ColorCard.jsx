import React from "react"

export const ColorCard = ({card}) =>{
    const {colores, likes, fecha, } = card
    console.log(card)
    return(
        <>
            <div className="colors">
                <ColorItemList colors={colores}/>
            </div>
            <div className="color-card-controls">
                <button className="btn-like"><i className="bi bi-heart"> </i>{likes}</button>
                <span className="time">{fecha}</span>
            </div>
        </>
        
    )
}



/*Como renderizamos esa carta que tenemos definida en su estructura en el componente ColorCard y en App.jsx tenemos el array con el 
contenido de cada carta? solo nos falta unir eso para mostrar y armar la carta, eso lo hacemos con un componente que reciba el array con 
las 4 cartas: const ColorCardList =({cartas_de_colores})//ACA VAMOS A RECIBIR EL ARRAY PARA LUEGO MAPEARLO Y QUE NOS RETORNE EN JSX
LAS CARTAS RENDERIZADAS, Mapeo:
cartas_de_colores.map // y por cada //((carta_de_colores) // que recibe va a => //generar el componente// <ColorCard //que recibe la props 
card y le pasamos como parametro cada carta que mapeamos   //
 card={carta_de_colores}/>) */



/*PODEMOS HACER LO MISMO CON EL ARRAY DE COLORES: */

export const ColorItemList = ({colors}) => {
    return(
        <>
            {colors.map((color, index) => <ColorItem color={color} key={color + index}/>)}     
        </>
    )
}

const ColorItem = ({color}) =>{
    return(
        <div className="color" style={{ backgroundColor: color}}></div>
    )
} 