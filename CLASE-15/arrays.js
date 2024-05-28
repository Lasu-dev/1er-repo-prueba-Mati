/*
Javascript es un lenguaje basado en prototipos, los distintos
datos que nosotros vamos viendo, cada uno de esos datos tiene su propio prototipo, en el caso de los arrays, el prototipo es el de array, 
o sea que tiene su propio prototipo, pero el tipo de dato de los arrays es objeto (datos objeto) 



Prototipo de string:
métodos de string
la propiedad length

/*
Cualquier cosa que se pueda enlistar 
arreglos/array, lista/list, coleccion/collection, matriz
*/
/*
let notaTrimestral1 = 9
let notaTrimestral2 = 10
let notaTrimestral3 = 6
//esto se puede simplificar con una variable que guarde el array con las notas de los 3 trimestres:
const notasTrimestre = [9, 10, 6]

//para modificar un index del array llamamos al array, entre corchetes el index, = y el nuevo valor que queremos asignar:
notasTrimestre[1] = 7

console.log('El segundo cuatrimestre te sacaste un: ' + notasTrimestre[1])

//y se puede acceder a cada uno de los indices del array de la siguiente forma:
console.log(notaTrimestre[0]) //9

//si queremos ver que tipo de objeto es el array:
console.log(typeof notasTrimestre) //object 
console.log(typeof []) // object

//Si yo quiero ver el array en su forma objeto:
console.log (Object(notasTrimestre)) //=> (3) [9, 10, 6]
                                     //0: 9
                                     //1: 10
                                     //2: 6
                                     //length: 3
                                     //[[Prototype]]: Array(0)

// nuestro array representado como objeto sería:                                     
const notas ={
    0: 9, 
    1: 10,
    2: 6,
    length: 3
}
*/


const nombres = [
    'pepe', 
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex'
]
/*console.log(nombres)
nombres[5] = 'alexis'
console.log(nombres)*/

//delete nombres[5] // malaaaaa practicaaaaaa, deja el casillero vacío eliminar o crear casilleros es mala practica, para eso hay un method.

//.pop() => elimina el último elemento
//nombres.pop() //me elimina el último index de mi array y lo restorna.

//.shift() => elimina el primer elemento
//nombres.shift() //me elimina el primer index de mi array y lo retorna.
/*let eliminado = nombres.shift()
console.log(eliminado) // guardo en la variable 'eliminado' el valor del elemento eliminado de mi array y lo muestro en consola*/

//.push() => agrega un elemento al final y return el nuevo length de mi array Ej. nombres.push(leonel)
//.unshift() => agrega un elemento al inicio y return el nuevo length de mi array Ej. nombres.unshift(leonel)

//indexOf(searchString) => busca el elemento en el array  y si lo encuentra return la posición y sino return -1
// SOLAMENTE SE USA EN ARRAY DE STRING POR QUE BUSCA UN STRING
//EJ. nombres.indexOf('maria') => va a buscar si existe maria y si existe return la posicion de maria. este valor lo podemos guardar en un variable:
/*let posicionMaria = nombres.indexOf('maria') //=> guardamos en una variable la posicion en el array de 'maria'
nombres[posicionMaria] = 'marianela' //=> del array nombres, tomamos el index de 'maria' y lo cambiamos por 'marianela
console.log(nombres) //=> [ 'pepe', 'juan', 'marianela', 'pedro', 'valentina', 'alex*/

//SI QUIERO ELIMINAR ALGUN ELEMENTO QUE ESTÉ EN MEDIO DEL STRING
//splice( posicion, cuantos elementos elimino?, nuevo elemento)
/*let posicionDeValentina = nombres.indexOf('valentina')
nombres.splice(posicionDeValentina, 1, )*/

////EJERCICIO: ELIMINAR A JUAN Y A MARIA

/*nombres.splice(nombres.indexOf('juan'), 1)
nombres.splice(nombres.indexOf('maria'), 1)
console.log(nombres)*/

//Mejorar este codigo con una función llamada eliminarNombre que recibirá el nombre a eliminar

/*function eliminarNombre (a, b){
   return a + b
} 
a=  'juan'
b=  'maria'
nombres.splice(nombres.indexOf(eliminarNombre)), 1*/

function eliminarNombre (nombres, nombreAEliminar){
    nombres.splice(nombres.indexOf(nombreAEliminar), 1)
}

eliminarNombre(nombres, 'maria')
eliminarNombre(nombres, 'juan')
eliminarNombre(nombres, 'valentina')
console.log(nombres)

// PARA AGREGAR ELEMENTOS TAMBIEN PODEMOS USAR SPLICE, PONIENDO CANTIDAD A ELIMINAR =0 Y AGREGANDO EL ELEMENTO NUEVO AL FINAL, 
//AL PONER 0 EN CANTIDAD A ELIMINAR NO ELIMINA NADA, PERO SI AGREGA UN ELEMENTO SI SE LO PEDIMOS EN EL 3ER PARAMETRO:

nombres.splice(nombres.indexOf('maria'), 0, 'carlos', 'jose')

//SI QUEREMOS ELIMINAR 2 ELEMENTOS Y MOSTRARLOS POR CONSOLA:

let nombresEliminados = nombres.splice(nombres.indexOf('maria'), 2, 'carlos', 'jose')
console.log(nombresEliminados) //=> nos va a mostrar en formato array los dos nombres que eliminamos ('maria' y 'pedro')