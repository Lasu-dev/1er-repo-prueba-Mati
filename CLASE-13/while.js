/*_______________PRINCIPIOS DE LA PROGRAMACIÓN__________________

DRY: Don´t repeat yourself


/*
Solicitar un nombre al usuario, si el nombre es ´pepe´ seguir solicitando el nombre cuando sea distinto de 'pepe' decir,'ese nombre no lo conozco'

*/
/*
let nombre = prompt('ingresa tu nombre')

if(nombre === 'pepe'){
    nombre = prompt('ingresa otra vez tu nombre')
    if(nombre == 'pepe'){
        nombre = prompt('ingresa otra vez tu nombre')
         if(nombre == 'pepe'){
        nombre = prompt('ingresa otra vez tu nombre')
             if(nombre == 'pepe'){
        nombre = prompt('ingresa otra vez tu nombre') //ETC ETC
    }
    else{
        alert('Ese nombre no lo conozco')
    }
}
else{
    alert('Ese nombre no lo conozco')
}                     //NOOOOOOOOOOOOOOOOOOOOOOOOO
//_________________ESTO SE HACE CON UN RECURSO QUE SE LLAMA WHILE...BUCLE WHILE______________*/

/*let nombre = prompt('ingresa tu nombre')

while(nombre ==='pepe'){
    nombre = prompt('ingresa otra vez tu nombre')
}
alert('Ese nombre no lo conozco')*/

let nombre = prompt('ingresa tu nombre')

while(!nombre){
    alert('ERROR: DATO NO VALIDO')
    nombre = prompt('ingresa nuevamente tu nombre')
}
alert('DATO INGRESADO CORRECTAMENTE')


