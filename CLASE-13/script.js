/*  Funciones nativas:

( Si una función no tiene devolución, no devuelve nada como alert, por defecto retorna un undefined)

-isNaN(dato): es una función que recibe un dato y te devuelve un boolean que indica si es o no un NaN.

-alert('string'): es una función que recibe un string y lo muestra en un pop up en la página.

-typeof(): nos dice que tipo de dato es. no se una función nativa como tal, si una palabra reservada.

-prompt(): es una función que recibe un mensaje y devuelve el valor ingresado por el usuario (siempre de tipo string), o null en caso de que 
            el usuario dé al valor cancelar. Si el usuario no pone nada la devolución de promp es ''.

-parseFloat(): parecido al Number(recomendado) dado un dato lo transforma a su valor numerico (si es flotante tambien)
            y sino se puede transformar devuelve un NaN.

-parseInt(): dado un dato lo transforma a su valor numérico ENTERO, si es flotante trunca el decimal, lo corta y  si no lo puede transformar 
            devuelve un NaN.



*/
/*let variable = alert('pepe' )
alert('El valor de retorno de alert es: ' + variable)
alert(typeof(3))

let dato = prompt('dime tu edad ')
dato = Number(dato)
alert('El valor de retorno de prompt es: ' + dato)
alert(typeof(dato))*/

/*-----------------IF---------------*/
/*
let edad = prompt('ingresá tu edad')
if(edad>=18){                     //if(condición){
    alert('Podes pasar')          //      bloque de código (que queremos que pase si se cumple la condición)
}                                 //}


else{                             // sino{
    alert('No podes pasar')       //      bloque de código (que queremos que pase si NO se cumple la condición)
}                                 //}

*/

/*________________IMPORTANTE________________IMPORTANTE________________IMPORTANTE________________IMPORTANTE________________*/

/*----------PARA QUE EL PROMP NO ME DEVUELVA UN '' CUANDO NO TIENE NINGÚN DATO:----------*/

/*CASO 1
let dato = prompt('Dime algo')

if(dato === null || dato === ''){
    alert('ERROR: DATO NO  VÁLIDO')
}
else{
    alert('todo está bien')
}*/
/*
// CASO 2 MEJORADO:
let dato = prompt('Dime algo')

if(!dato){
    alert('ERROR: DATO NO VÁLIDO')
}
else{
    alert('Todo está bien')
}
*/
//MAS SENCILLO AUN:

/*let dato = prompt('Dime algo')

if(dato){
    alert('Todo está bien')

}
else{
    alert('ERROR: DATO NO VÁLIDO')
}*/

// ELSE IF
// Si el puntaje da entre 0 y 1000 diremos 'principiante'
// Si el puntaje da entre 1000 y 3000 diremos 'avanzado/a'
// Si el puntaje da  mayor a 3000 diremos 'experto/a'

/*let puntos = prompt('ingresa tu puntaje') 
if(puntos >=0 && puntos <= 1000){
    alert('principiante')
}
else if (puntos > 1000 && puntos <= 3000){
    alert('avanzado/a')
}
else if(puntos > 3000){
    alert('experto/a')
}
else{
    alert('ERROR: DATO NO VÁLIDO')
}*/


//_________EJERCICIOS:

/*
1. Crea una variable llamada "tieneHijos" y asígnale "true" si tiene hijos o "false" si no los tiene. A continuación, escribe
una línea de código para mostrar el valor de la variable en una alerta.

2. Crea una variable llamada "salario" y solicita un salario actual como valor. A continuación. escribe una línea de código 
que calcule el salario anual multiplicando el salario mensual por 12 y muestre el resultado en un alerta.

3. Escribe una condicional que verifique si una variable llamada "edad" es mayor o igual a 18. Si es mayor o igual a 18,  
imprime "Eres mayor de edad" en la consola. Si no es mayor de edad, imprime "Eres menor de edad" en un alerta.
*/

//1. (check)
/*let tieneHijos = prompt('tenés hijos?')
if(tieneHijos == 'si'){
    alert('true')
}
else{
    alert('false')
}
---------------SOLUCION DE LA CLASE:*/
                /*let tieneHijos = false
                alert(tieneHijos)*/

//2. (check)
/*
let salario = prompt('Cual es tu salario mensual?')
    let resultado = salario *12
    alert('tu salario anual es: $ ' + resultado)*/

//3. (check)
/*
let edad 
if(edad >= 18){
    console.log('Sos mayor de edad')
}
else {
    alert('Sos menor de edad')
}*/

//4. OPCIONAL
/*
De un empleado se sabe su sueldo y los años de antigüedad. El sector de contabilidad nos pide hacer un programa que 
lea los datos y los  muestre.

1)- Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, otorgarle un aumento del 20 %, 
mostrar el sueldo a pagar.
2)- Si el sueldo es inferior a 500 y su antigüedad es inferior a 10 años, otorgarle un aumento del 5 %
3)- Si el sueldo es mayor o igual a 500 mostrar el sueldo en la página sin cambios
*/
/*
let salario = 300
let antiguedad = 7


if(salario < 500 && antiguedad >=10){
    alert( '$ ' + salario * 1.2)
}
else if(salario < 500 && antiguedad < 10){
        alert( '$ '+ salario * 1.05)
    }

else if(salario >=500){
    alert ('$ ' + salario)


}*/

/* Este es el de Mati-
let salario = 400
let antiguedad = 7

if(salario < 500)
    if(antiguedad >=10){
        alert( '$ ' + salario * 1.2)
    }
    else{
        alert( '$ '+ salario * 1.05)
    }
else{
    alert ('$ ' + salario)
}*/
    
/*
1) Escribe un condicional que verifique si una variable llamada "tieneHijos" es "true". Si es "true", imprime "Tienes hijos" en la consola.
 Si es "false", imprime "No tienes hijos" en la consola.
2) Escribe un condicional que verifique si una variable llamada "genero" es "hombre" o "mujer". Si es "hombre", imprime "Eres hombre" en la consola.
 Si es "mujer", imprime "Eres mujer" en la consola.
3) Que el usuario realice la carga de un dato por teclado dicho dato será el lado de un cuadrado ,para luego  mostrar por pantalla el perímetro del
 mismo .
4) Hacer un programa donde se ingresan cuatro números, calcular e informar la suma de los dos primeros y la multiplicación del tercero y el cuarto.
5) Se ingresa  un valor entero, mostrar un mensaje que indique si el número es positivo, cero o negativo.
6) Escribe una expresión que use el operador "&&" (and lógico) para verificar si una variable llamada "edad" es mayor o igual a 18 y si una variable
 llamada "tienePermiso" es "true". 
Si ambas condiciones se cumplen, imprime "Puedes conducir" en la consola. Si alguna de las dos condiciones no se cumple, imprime "No puedes
 conducir" en la consola.*/

 //1)
/*let tieneHijos = true

if(tieneHijos === true){
    console.log("Tienes hijos")
}
else{
    console.log('no tiene hijos')
}*/

//2)
/*let genero = 'hombre'
if(genero==='mujer'){
    console.log('eres mujer')
}
else{
    console.log('eres hombre')
}*/ 

//3)
/*let dato = prompt('cuanto mide el lado del cuadrado?')
let perimetro = dato * 4
alert('el perímetro del cuadrado es: '+ perimetro)*/

//4
/*let num1 = prompt('ingrese el primer numero')
let num2 = prompt('ingrese el segundo numero')
let num3 = prompt('ingrese el tercer numero')
let num4 = prompt('ingrese el cuarto numero')
let suma = Number(num1) + Number(num2)
let multiplicacion = num3 * num4
alert('la suma de los dos primeros numeros es: '+ suma + ' y la multiplicacion del tercero y el cuarto es: ' + multiplicacion)*/

//5
/*let valor = prompt('ingresa un numero y te digo si es un entero, un 0 o un numero negativo')
if(valor > 0){
    alert('el numero ingresado es: entero')
}else if(valor == 0){
    alert('el numero ingresado es: 0')  
}
else if(valor < 0){
    alert('el numero ingresado es: negativo')
}
else (valor === null || valor === '');{           //por que me pide el ; acá sino me tira error?
    alert( 'ERROR: DATO NO VÁLIDO')
}*/

//6

/*let edad = 33
let tienePermiso = false

if(edad >= 18 && tienePermiso == true){
    console.log('Puedes conducir')
}
else{
    console.log('No puedes conducir')
}*/

