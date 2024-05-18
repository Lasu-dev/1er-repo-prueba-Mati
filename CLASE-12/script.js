/*------OPERADPRES LOGICOS-------*/

/*
! : NOT o negación
No da el valos booleano opuesto al dato que estoy negando
*/
/*console.log(! true) 
console.log(! '')
console.log(! 'pepe')*/


/*
||: OR o ó
Es un selector, no evalúa, solo selecciona entre los valores, la condición se la debemos dar nosotros.
Devuelve el valor booleano de la primera condición que sea verdadera
Si los dos valores son falsos nos devuelve el 2do valor sin importar si este es falso, y si hay mas de 2 datos y todos son falsos
siempre nos devuelve el último-
*/


/*
&&: AND ó Y lógico
Evalúa, NO devuelve booleano, evalúa los valores y si alguno de ellos es falsy devuelve el valor que es falsy.
    -Si el 1er valor es false:
        devuelve el 1er valor.
    -Si el 1er valor es true:
        devuelve el 2do valor.    
Si son varios  valores y todos son truly, devuelve el último valor
La lógica es la siguiente: si el primer valor es falso, no sigue evaluando el resto, eso hace que ya toda la condición sea falsa, 
entonces devuelve el 1er valor que encuentre que sea false.

console.log(0 && 7) => 7
console.log(true && 7) => 7

var estado = true

estado && console.log('llegó el mensaje') => lo va a mostrar

console.log(1 && 1 && 'pepe') => 'pepe'

TRANQUILO PRIMO, ESTO SE ENTIENDE Y SE APRENDE BIEN CON LA PRÁCTCA..VAMOS A HACER EJERCICIOS.

*/  


/*
4 && false || Boolean(NaN) => false
    (false ||  false)

Number('1') === Number (1) && Number('pepe' + 1) => NaN 
                    true   &&   NaN
*/

/*------------------------ VARIABLES----------------------*/

/* 
Es un espacio reservado para almacenar un dato, éste debe tener un identificador el cual usaremos para llamar al dato y así obtenerlo 
Javascript es un lenguaje debilmente tipado y de tipado dinámico.
debilmente tipado = No necesito especifivar que tipo de dato es mi variable.
tipado dinámico = el tipo de dato de mi variable puede cambiar en cualquier momento.

 */


/*
DECLARACIÓN: Es cuando creamos nuestra variable.
Sintaxis de declaración:
<tipo de variable> identificador = dato

HOISTING: Es la capasidad  de una varialbe de ser llamada antes de ser declarada.


CONST (ES6)

Tiene hoisting?                 NO
Se puede reasignar?             NO
Se puede redeclarar?            NO, SOLO EN DISTINTOS BLOQUES
Valor implicito en undefined?   NO


VAR (ES5)

Tiene hoisting?                 TIENE
Se puede reasignar?             SI
Se puede redeclarar?            SI
Valor implicito en undefined?   SI
El alcance de var es siempre global


LET (ES6)

Tiene hoisting?                 NO
Se puede reasignar?             SI
Se puede redeclarar?            NO (por ahora)
Valor implicito en undefined?   SI


{
    ESTO ENTRE LLAVES ES UN BLOQUE DE CODIGO
}

*/

/*--------------------TAREA: -------------------- */


/*Determinar el resultado y corroborar por consola.

(true > true || 9) && Number(Boolean(1)) > 0 || 'pepe'
            9      &&    true                || 'pepe'
                                    true     || 'pepe' => true
                                            

'valor' === "VALOR" || NaN == NaN && '1' === !'-1'
            false   || false      &&  false  => false


DETERMINAR EL ORDEN DE LOS NOMBRES
*/
let nombre = 'pepe'
console.log(nombre)  /* pepe*/
{
    let nombre = 'pedro'
    console.log(nombre)
    {
        let nombre = 'maria'
        console.log(nombre)
    }
    {
        let nombre = 'leonel'
        console.log(nombre)
        {
            nombre = 'julieta'
            console.log(nombre)
        }
        console.log(nombre)
        nombre = 'juan'
    }
    console.log(nombre)


}
console.log(nombre)


/* ----Resolución:

pepe
pedro
maria
leonel
julieta
julieta

*/ 