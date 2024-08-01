/* EVENTOS*/
/*
es una accion que sucede, y cuando sucede, nosotros podemos hacer algo en consecuencia, lo vamos a capturar y vamos a hacer una accion*/


function alertar(){//estamos guardando la funcion alertar en la memoria
    alert('Hola desde un evento ONCLICK ')   
}

const btnClick2 = document.getElementById("btn-especial")

//btnClick2.onclick = alertar

//EN VEZ DE CREAR UNA FUNCION E INVOCAR A LA REFERENCIA HAY OTRA FORMA : 

btnClick2.onclick = function(){//estamos guardando la funcion solo como propiedad de onclick, a esta function no la vamos 
    alert ('Hola desde un evento click')//a poder llamar en otro momento del código
}

//const btnClick3 = document.querySelector('.btn')
//const btnClick3 = document.getElementsByClassName("btn")[0]
//const btnClick3 = document.querySelectorAll('.btn')//al tener el formato de array es iterable, ya que necesita tener lugares y length

//.addEventListener es un metodo que va a recibir 1° un tipo de evento
const btnClick3 = document.getElementById("btn")
//btnClick3.addEventListener('click', alertar)//no hace falta poner onclick, ya lo toma por que esta como parametro de addEventListener
                                            //y ya se toma como evento, 

//Cuando me hagan click en el btn  quiero que por consola se diga click

/*btnClick3.addEventListener('click', function(){//en vez de hacer la callback, le pasamos directo la function como 2do parámetro.
    console.log('click')
})*/


//________________---------------ARROW FUNCTIONS-------------__________________________
/*Las funciones en flecha tienen la ventaja del retorno directo, cuando nos conviene hacer un retorno directo? 
cuando la función no haga muchas acciones o directamente la function retorne

Ejemplo:
(la siguiente function es solo a modo ejemplo no está haciendo nada más que mostrar la sintaxis)
function hacerTarea(){
    let tipo <0 prompt('qie tipo de tarea quiere hacer?')
    guardarTarea(tipo)
    return tipo
}
ESTE TIPO DE FUNCIONES NO SE PUEDE ABREVIAR CON ARROW FUNCTION, PERO LA SIGUIENTE SI:

function calcularIva(num){
return num*0.21
}
SERÍA:
function calcularIva(num)=>num*0.21
*/
//MAS EJEMPLOS:

const validarNumero= (num)=> Boolean(num) && !isNaN(num)// y listo nuestra función de validar numero
console.log(validarNumero(8))//true
console.log(validarNumero('pepe'))//false

//un ejemplo con más codigo
const solicitarDato = (solicitud) => {
    let dato = prompt('ingrese un: ' + solicitud)
    while(!dato){
        let dato = prompt('ERROR: ingrese un: ' + solicitud)
    }
    return dato
}
//CUANDO QUIERO RETORNAR UN OBJETO
//Ejemplo largo:
/*const generarUsuario = (username, email) => {
    return {
        username:username,
        email:email
    }
}*/

//MAS LEGIBLE Y CON MENOS CODIGO:
const generarUsuario = (username, email) => ({username:username,email:email})//DEBERÍAMOS EMPEZAR A USAR ESTE TIPO DE SINTAXIS, 
//CUANDO RETORNA UN OBJETO, EL OBJETO LO TENEMOS QUE PONER DENTRO DE () PARA QUE RETORNE EL OBJETO DIRECTAMENTE.
//LA FLECHA LEE =>() CUANDO HAY UN RETORNO DIRECTO
//              =>{} CUANDO HAY RETORNO INDIRECTO,COMO CUANDO TENEMOS QUE HACER UNA FUNCION MAS LARGA (EJEMPLO DE ARRIBA LINEA 70)
//SON INCOMPATIBLES EL RETORNO DIRECTO CON EL OBJETO, PARA QUE SEAN COMPATIBLES LE TENEMOS QUE PONER LOS ()

//UNA DE LAS VENTAJAS MAS IMPORTANTES QUE NOS TRAE LA => CUANDO YO ESCRIBO UNA CALLBACK HAGO LO SIGUIENTE:
btnClick3.addEventListener('click', function(evento){
    console.log(evento)
    console.log('click')
})
//SI LA HAGO CON => ES ASI:
btnClick3.addEventListener('click',() => {//
    console.log('hola')
    }
)

const personasPepe =[
{
    nombre:'pepe',
    edad: 14
},
{
    nombre:'pepe',
    edad: 50
},
{
    nombre:'pepe',
    edad: 30
},
{
    nombre:'pepe',
    edad: 25
}
]
const mayoresDeEdad =personasPepe.filter((persona) => persona.edad >= 18 )//siempre poner parentesis antes de la flecha
console.log(mayoresDeEdad)

//VAMOS A APRENDER A CAPTURAR UN DATO, ESPECIFICAMENTE DE UN INPUT(type="submit" en el input activa el evento submit)

const formularioHTML = document.getElementById('formulario')
//la callback asociada a un evento(la funcion que se le pasa al .addEventListener) se le llama handle, y es de buena práctica 
//si por ej creamos una variable/función asociada a un evento: const enviar =() =>{} si la vamos a asociar al addEventListener
//le deberiamos poner el handle al nombre de la función: const handleEnviar =()=>{etc etc}

const handleSubmit = (evento) =>{//El primer argumento de una función handle SIEMPRE es el evento, hace referencia a este objeto especial
                                    // que se crea siemprey cada vez que ocurre el evento
    evento.prevenentDefault()                                
    console.dir (formularioHTML.dato.value)                                
}

formularioHTML.addEventListener('submit', handleSubmit)

console.log ('El valor acrual del input dat es: '+ formularioHTML.dato.value)


