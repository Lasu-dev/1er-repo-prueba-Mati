/*_____________FUNCIONES_______________*/

/*
La función la usamos principalmente para evitar repetir lógica en mi codigo, 
en la función guardamos una lógica que sabemos que se va  repetir muchas veces en mi código, y en vez de escribir una y otra vez esa lógica, 
invocamos a la función.
*/ 

/*declaro mi función , pero esta función lo único que hace es sumar 2 + 2*/
/*function sumar2Mas2(){
    console.log('el resultado de la suma es: '+ (2+2))
}
//invocación o llamada a la función: (aquí se le da el valor)
sumar2Mas2(); //el resultado de la suma es: 4*/ 


// esta función suma 2 valores x que son PARÁMETROS, estos parametros funcionan como un "let",
//podemos ir reasignando el valor en cualquier momento de nuestro código y tambien podemos modificarlo.

/*function sumar(a, b){
    a = a + 1
    console.log('el resultado de la suma es: '+ (a+b))
}

sumar(9,8)
sumar(1,1)*/
 //otro ej.
/*function saludar(nombre){
    console.log('Hola '+ nombre)
}  
saludar('pepe')*/

//otro ejemplo

/*function restar(a, b){
    return ( a - b)               // si acá usamos console.log() limitamos el ámbito de acción de nuestra función a la consola
}                                              //en cambio el return la retorna, y cuando la invocamos le decimos donde 
let num1 = 1                                              //queremos que se ejecute.   
let num2 = 2
let resultado = (num1 - num2)

console.log(resultado)*/


/* ejercicio: 
calcularIva(precio)=> el valor del iva
calcularIva(100) => 21
*/

/*function calcularIva(){
    return (num)
}
num=200
num = num * 0.21
console.log(num)    // salioooooo carajooooooooooo junagranputa*/

//mirá como lo hizo Mati:
//function calcularIva(precio){
//    return precio * 0.21
//}


//otro ejercicio
/*
calcularMinutos(horas)=> cantidad de minutos
calcularMinutos(1) => 60
*/

/*function  calcularMinutos (){
    return (horas * 60)
}
let horas = 3
console.log(calcularMinutos())*/

//otro ejercicio
/*
obtenerNumero()
Va a solicitar al usuario un numero y va a validar que el dato ingresado sea un numero
Sino deberá volver a solicitarlo
Cuando termine de validar se retornará el numero
*/
/*function obtenerNumero(){
    let numero = prompt("ingrese un numero")
    while(!numero||isNaN(numero)){
        numero = prompt("ERROR, ingrese un numero")
    }
    numero= Number(numero)
    return numero
}

let numero = obtenerNumero()
console.log(numero)*/


//________________________STRINGS

/*
PROPERTY:
string.length = nos dice la longitud del string (cuenta los espacios)

METHODS:
string.toUpperCase() = convierte todo el string a mayusculas
string.toLowerCase() = convierte todo el string a minusculas
string.trim() = elimina los espacios en blanco al principio y al final del string
string.includes(string_buscado) = verifica si el string buscado esta dentro del string (retorna boolean)
string.replaceAll(string_a_reemplazar, valor_nuevo)
string.repeat(string_a_repetir)

*/
