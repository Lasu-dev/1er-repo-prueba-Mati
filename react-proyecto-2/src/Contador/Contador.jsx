import React, { useState } from "react";





export const Contador = ({limit}) => {
    const [valor, setValor] = useState(0)
    const handleIncrementar = () => {
        if(valor != limit){
            setValor(valor + 1)
        }
        
    }
    const handleDecrementar = () =>{
        if(valor != 0){
            setValor(valor - 1)
        }
    }
//     return (
//     <div>
//         { /* ESTO ES UN OPERADOR TERNARIO */
//             valor === 0 //1ro LE PASAMOS LA CONDICION (if)
//             ?<button onClick={handleIncrementar} > Comprar </button>//2do QUE VA A PASAR SI LA CONDICION SE CUMPLE (else  )
//             ://QUE VA A PASAR SI NO
//             <>   
//                 <button onClick={handleDecrementar} style={{ width: '15px' }}> - </button>
//                 <span style={{ width: '20px', display: 'inline-block', margin:'1%', alignItems:'center' }}>{ valor }</span>
//                 <button onClick={handleIncrementar} style={{ width: '15px' }}> + </button>
//             </> 
//         }
//     </div>
//     ) 
// }
//SI QUISIERA HACER MAS DE 1 OPERADOR TERNARIO ESTA SERÍA LA FORMA CORRECTA:
return (
    <div>
        {
            valor === 0 
            ? (<button onClick={handleIncrementar}>Comprar</button>)
            : (
                <>
                    <button onClick={handleDecrementar} style={{ width: '15px' }}>-</button>
                    <span>{valor}</span>
                    {
                        valor === limit
                        ?<span>Has llegado al limite</span>
                        :<button onClick={handleIncrementar} style={{ width: '15px' }}>+</button>
                    }
                </>
            )
        }
        { valor > 1 && <h2>Bien, sigue comprando</h2>} 
        {/* { valor > 1 ? <h2>Bien, sigue comprando</h2> : null}  Este es un error comun de la ia, no es necesario retornar un null
                                                                    con un if simple es suficiente, estamos usando un ternario sin 
                                                                    necesidad*/}
    </div>
)
}
// { valor > 1 && <h2>Bien, sigue comprando</h2>} ESTE ES UN OPERADOR CORTOCIRCUITO, SOLO UNA CONDICIÓN, UN if SIMPLE