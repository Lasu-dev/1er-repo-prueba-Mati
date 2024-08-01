/*LOGIN:

-Prompt que va a solicitar al usuario un email
-validamos que ese email sea un email con una expresion regular

RegEx / expresión regular:
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailAVerificar)  nos retorna un boolean (.test es un metodo)
false: volvera a solicitar el email
true: dira email registrado

Todo el logeo debe estar adentro de una funcion 
Recomendacion:
Pueden usar todas las funciones o crear las funciones que crean necesarias

login()*/


/*function login(){
    ingresaEmail = prompt('ingresa tu email')
    if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(ingresaEmail) == false){
        alert('ERROR: el email ingresado no es valido')
        prompt('ingresa un email valido')
    }else{
        alert('email ingresado con exito')
        return ingresaEmail
    }
}    

ingresaEmail = login()*/ 

//en este caso no vuelve a pedir el email hasta que ingrese uno correcto, solo lo pide 2 veces,  hay hacerlo con un while para eso:


/*function login(){
    let emailUsuario = prompt('ingresa tu email')
    while(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailUsuario))){
        alert('ERROR: el email ingresado no es correcto')
        emailUsuario=prompt('ingresa un email valido')
    }
    alert('email registrado con éxito ')
    return emailUsuario
}

let emailRegistrado = login()*/


//ADEMAS SE PUEDE HACER UNA FUNCION SOLO CON LA VALIDACION Y DESPUES LLAMARLA EN LA OTRA FUNCION:
/*
una vez solicitado el email vamos a solicitar password
Validaremos que tenga una letra en mayuscula
que no sea null o ''
que tenga almenos 6 caracteres
En caso de que no volvera a solicitar
En caso de que si sea valido dira password registrada {password}
*/
function validarEmail (email) {
    return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email))  //listo, ya tenemos la funcion para validar email
} 
function validarContraseña (password){
    return ( password !== null && password !== '' && password.length >= 6 && /[A-Z]/.test(password)) //estas son las condiciones que
}   
function validarOperacion(dato){
    return (/^[+-]$/.test(dato))
}
function validarNumber(dato){
    return (/^\d+$/.test(dato))
}
                                                                                                 //tiene que cumplir el password




/*function obtenerEmail(){
    let usuarioEmail = prompt ('ingresa tu email')
    while(!(validarEmail(usuarioEmail))){ //Acá niego la validación email por que si es false se va a ejecutar el error.
        alert('ERROR: el email ingresado no es correcto')
        usuarioEmail = prompt('ingresa un email valido')//A ususarioEmail se le va a reasignar un valor esperando que sea correcto
                                                        //sino otra vez se va a ejecutar el while (ERROR) hasta que cumpla la validación
    }
    alert('email registrado con éxito ') //cuando el while deja de ejacutarse, se continúa con el resto del código
    return usuarioEmail//IMPORTANTE RETORNAR LA VARIABLE (preguntar por qué)
}  
function obtenerPassword(){  
    let usuarioPassword = prompt ('ingresa una contraseña que contenga al menos 1 letra mayúscula y al menos 6 caracteres')
    while(!(validarContraseña(usuarioPassword))){//Acá pongo negar la validación, por que si NO cumple con las condiciones se ejecuta el ERROR
        alert('ERROR: la contraseña ingresada no es correcta')
        usuarioPassword = prompt('ingresa una contraseña válida')
    }
    alert('contraseña registrada con éxito')
    return usuarioPassword
}'ERROR: la contraseña ingresada no es correcta'


// Para probar las funciones puedes llamar a obtenerEmail y obtenerPassword
function login(){
let email = obtenerEmail();
let password = obtenerPassword();
console.log(`Email: ${email}, Password: ${password}`);
}
login()//llamada a la función*/




//Mejora de la función:

/*function obtenerDato (mensaje,mensajeError, validacion ){
    let dato = prompt(mensaje)
    while (!validacion(dato)){
        alert(mensajeError)
    }
}
obtenerDato('ingresa tu email', 'ERROR: el email ingresado no es correcto', validarEmail )
obtenerDato('ingresa una contraseña que contenga al menos 1 letra mayúscula y al menos 6 caracteres',
'ERROR: la contraseña ingresada no es correcta', validarContraseña )*/


//Se puede mejorar aun mas, pasando los datos a las función obtenerDato en formato {objeto} WTF!!!!!


/*function obtenerDato(data){ //declaro la función obtenerDato y le doy como parametro data (puede ser cualquier nombre) que va a ser el 
                            // nombre de mi objeto que voy está declarado en la linea 124
    let dato = prompt(data.mensaje) // declaro la variable dato y le asigno el prompt con el mensaje de mi objeto(data.mensaje)
    while(!data.validacion(dato)){ // hago la validacion invocando el valor del parametro validacion de mi objeto y le paso obviamente
                                   // el valor del dato ingresado en el prompt para que lo valide
        dato = prompt (data.error)
    }
    return dato //retorno la variable para que la función sea bien agnóstica y la podamos usar la cantidad de veces que sean necesarias.
}
// VAMOS A HACER UN PSEUDO DICCIONARIO ANTES DEL LOGIN, EL DICCIONARIO NOS PERMITE ALMACENAR NUESTROS OBJETOS PARA DESPUES PODER USARLOS
//TODAS LAS VECES QUE QUERAMOS

const DATOS = {
    EMAIL:{
        mensaje: 'ingresa tu email',
        error:'ERROR: el email ingresado no es correcto',
        validacion: validarEmail
    },
    PASSWORD:{
        mensaje: 'ingresa una contraseña que contenga al memos 1 mayúscula y mínimo 6 caracteres',
        error: 'ERROR: ingrese una contraseña de mínimo 6 caracteres y 1 letra mayúscula',
        validacion: validarContraseña
    }
}
function login(){
    let email = obtenerDato(DATOS.EMAIL)
    let password = obtenerDato(DATOS.PASSWORD)
    return { email: email, password: password}
}
login ()*/

/*function login(){
let email = obtenerDato( //invoco a la funcion obtenerDato y le paso el objeto que contiene 2 strings (mensaje y error) y la invocación 
             // a la función de validar email 
    {
    mensaje: 'ingresa tu email',
    error:'ERROR: el email ingresado no es correcto',
    validacion: validarEmail
    }
)   
let password = obtenerDato(
    {
        mensaje: 'ingresa una contraseña que contenga al memos 1 mayúscula y mínimo 6 caracteres',
        error: 'ERROR: ingrese una contraseña de mínimo 6 caracteres y 1 letra mayúscula',
        validacion: validarContraseña
    }
)
return {email:email, password:password}
}
login()*/

//ESTO TIENE MAS CALIDAD DE CODIGO, PARECE MAS SIMPLE PERO ES MAS COMPLEJO, CUMPLIMOS CON EL PRINCIPIO DRY YA QUE NO VAMOS A TENER QUE 
//REPETIR LOGICA EN NUESTRO CODIGO POR QUE PODEMOS INVOCAR A ESTA FUNCION PARA VALIDAR CUALQUIER DATO QUE LE SOLICITEMOS AL USUARIO

//VOY A INTENTAR SUMAR LA FUNCION PARA SOLICITAR LA CONTRASEÑA:

// VAMOS AHORA CON LA SUMA Y LA RESTA DE NUESTRA CALCULADORA
/*CALCULADORA:

-tener soporte para para las siguientes operaciones : +, -
        -'+'
        -'-'
operacionesValidas = ['+', '-']

Solicitar una operacion:
La operacion es valida si es una de las operaciones validas.
Vamos a solicitar un numero1:
Validar que sea un numero
Vamos a solicitar un numero2:
validar qui sea un numero

En caso de elegir una '+'
Aca sumamos
Mostrar por alerta 'el resultado de {numero1} {operacion} {numero2} es {resultado}'

En caso de elgir una '-'
Aca restamos
Mostrar por alerta 'el resultado de {numero1} {operacion} {numero2} es {resultado}'
*/
/*const CALCULAR ={
    OPERACION:{
        mensaje: 'Por favor ingresa si deseas sumar (+) o restar (-)',
        error: 'Error: la operacion ingresada no es correcta, por favor ingresa + o -',
        validacion: validarOperacion   
    },
    NUMERO:{
        mensaje1: 'ingresa un numero del 0 al 9',
        mensaje2: 'ingresa el otro numero del 0 al 9',
        error: 'Error: el dato ingresado no es correcto, por favor ingresa un numero del 0 al 9 ',
        validacion: validarNumber
    }
} 
function obtenerOperacion (){
    let dato = prompt(CALCULAR.OPERACION.mensaje)
    while(!(CALCULAR.OPERACION.validacion(dato))){
        alert(CALCULAR.OPERACION.error)
        dato = prompt(CALCULAR.OPERACION.mensaje)
    }
    return dato
}
function obtenerNumero(mensaje) {
    let numero = prompt(mensaje)
    while (!CALCULAR.NUMERO.validacion(numero)) {
        alert(CALCULAR.NUMERO.error)
        numero = prompt(mensaje)
    }
    return parseInt(numero, 10) // Convertimos el valor a número entero
}
function realizarOperacion(operador, num1, num2) {
    if (operador === '+') {
        return num1 + num2
    } else if (operador === '-') {
        return num1 - num2
    }
}


function calcular() {
    let operador = obtenerOperacion()
    let num1 = obtenerNumero(CALCULAR.NUMERO.mensaje1)
    let num2 = obtenerNumero(CALCULAR.NUMERO.mensaje2)
    let resultado = realizarOperacion(operador, num1, num2)
    
    console.log(`El resultado de ${num1} ${operador} ${num2} es: ${resultado}`)
    alert(`El resultado de ${num1} ${operador} ${num2} es: ${resultado}`)
}

// Ejecutar la función calcular para iniciar el proceso
calcular()*/

/*
HISTORIAL:

El historial debera tener el siguiente formato

Dado el siguiente array
historial = [
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2 
    },
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2 
    },
]


Crear una funcion llamada: renderizarHistorial(historial)

La funcion debera crear un string a partir del array con el siguiente formato y retornarlo:

'
El historial es:

Accion: CALCULAR
operacion: {operacion}
numeros: {a}, {b}
resultado: {resultado}

Accion: CALCULAR
operacion: {operacion}
numeros: {a}, {b}
resultado: {resultado}
'
Luego mostar el string resultante por alerta

Recuerda: puedes usar `` (template string para hacer saltos de linea) o '\n'
Ejemplo:
'El historial es:\n-hola' 
se vera como:
El historial es
-hola

o con template string:
`
El historial es
-hola
`
se vera como:
El historial es
-hola
*/   


/*const historial = [
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 3 
    },
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 2,
        b: 2,
        resultado: 4 
    },
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 12,
        b: 2,
        resultado: 14 
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 15,
        b: 2,
        resultado: 13 
    },
]*/

//console.log (historial)

// forEach CON AYUDA DE LA IA

/*function renderizarHistorial(historial) {
    let resultado = 'El historial es:\n';

    historial.forEach(function(item) {
        resultado += `
    Accion: ${item.accion}
    operacion: ${item.operacion}
    numeros: ${item.a}, ${item.b}
    resultado: ${item.resultado}
    `;
    });

    return resultado;
  }
  
  const historialRenderizado = renderizarHistorial(historial)
  console.log(historialRenderizado)
  alert(historialRenderizado)*/

//for of EN CLASE:

/*function renderizarHistorial (historialRecibido){
    let objetoHistorial = 'El historial de la calculadora es: \n '
    for (const item of historialRecibido){
        objetoHistorial +=
        `
        Accion: ${item.accion}
        operacion: ${item.operacion}
        numeros: ${item.a}, ${item.b}
        resultado: ${item.resultado}
        `
    }return objetoHistorial
}
console.log (renderizarHistorial(historial))
alert  (renderizarHistorial(historial))*/


//.map EN CLASE

/*function renderizarHistorial (historial){
    return historial.map (function(item){
            return`
        Accion: ${item.accion}
        Operacion: ${item.operacion}
        Numeros: ${item.a}, ${item.b}
        Resultado: ${item.resultado}
        `
    })
}
const historialRenderizado = renderizarHistorial(historial).join('\n')
console.log (historialRenderizado)
alert(historialRenderizado)

/* Crear una funcion llamada 
elementoHistorial = {
        accion: 'CALCULAR',
        operacion: '+',
        a: 2,
        b: 2,
        resultado: 4 
    } 
agregar al historial (elementoHistorial)    
agregar el objeto al array global historial

obtenerHistorial() que va a retornar el historial global
*/

let elementoHistorial = {
    accion: 'CALCULAR',
    operacion: '-',
    a: 12,
    b: 22,
    resultado: -10
} 

function agregarAlHistorial()  { 
    const historial = obtenerHistorial() //Acá creo la const historial y le doy el valor de array vacío que creé en el historial,
                                         // sinó donde pusheo los elementos que quiera agregar  en el historial?
    historial.push(elementoHistorial)
    let historialStr = JSON.stringify(historial)
        localStorage.setItem('historial', historialStr)
    }

function obtenerHistorial(){
    
    let historialArray = localStorage.getItem('historial')
    return  JSON.parse(historialArray)
    
}
//NOs aseguramos que el usuario que entra por primera ya tenga un historial, para que?? para poder hacer el push, por que no se puede
//pushear al historial, si no hay historial. jeje cambiamos el historial.push de la función agregarAlHistorial() por obtenerHistorial.push 
if(obtenerHistorial() === null){ //Si el historial es null significa que el ususario nunca entró antes y no tiene historial, entonces:

    localStorage.setItem('historial', JSON.stringify([]))//creamos un item con la key 'historial' y el valor sea un array vacío
}

obtenerHistorial()

agregarAlHistorial()
obtenerHistorial()
//console.log(historial)
//const objetoEnString = JSON.stringify(historial)
//alert(objetoEnString)




