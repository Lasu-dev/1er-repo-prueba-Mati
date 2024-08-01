import { ColorCard } from "../ColorCard/ColorCard";

/* este componente recibe el array de colores y solo se va a encargar de renderizar la lista */
export const ColorCardList = ({cartas_de_colores,}) => { //este es un componente que va a tener la tarea de listar las cartas de 
    return(                                      //colores (colors_cards_info), acá vamos a tener toda la lógica del mapeo
        <>
            {
                cartas_de_colores.map((carta_de_colores, id) => <ColorCard  key={id} card={carta_de_colores}/>)
            }
        </>
    )
}    