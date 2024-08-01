/*const formLoginHTML = document.getElementById('form-login')//nunca vamos a usar esta variable en REACT no se hace así

formLoginHTML.addEventListener('submit',(evento)=>{
    evento.preventDefault()
    console.log('Se envió el formulario') 
    console.log(formLoginHTML.username.value)
    //_________________---------IMPORTANTE!!!!!-------_______________
//TANTO LA VARIABLE formLoginHTML QUE CREO PARA GUARDAR EL FORMULARIO CON: document.getElementById COMO EL evento.target ME GUARDAN EL FORMULARIO!! EJ:
    console.dir(formLoginHTML)
    console.dir(evento.target)
//es exactamente lo mismo y puedo guardarlo tambien en una variable:
    const formulario = evento.target
    console.log(formulario)
})*/

//QUIERO LLAMAR AL INPUT USERNAME
//Esta linea de código la podemos poner directamente dentro del evento.para que luego del submit nos lo muestre por consola despues del msj de envío 
//console.log(formLoginHTML.username.value)// Este username viene del name de nuestro input, muy importante que el input tenga un name,
                                         // y el value nos trae el texto (valor) que tenemos en nuestro input

//vamos a hacer una fuction agnostica para que actúe con un evento: esta funcion puede estar asociada a cualquier otro formulario si lo necesitamos

/*const formRegisterHTML = document.getElementById('form-register')

const handleLogin = (evento) => {
    evento.preventDefault()
    console.log('Se envió el formulario')
    const formulario = evento.target //tiene la ventaja que es mas generico, podemos activarla con distintos formularios
    console.log(formulario.username.value) 
    const username = formulario.username.value
    if(username.length < 4){
        const errorTextHTML = document.getElementById("error-text-username")
        errorTextHTML.innerText = 'ERROR: El username debe tener al menos 4 caracteres'
        //errorTextHTML.style.color = 'red' se podría hacer así, pero mucho mejor es darle el estilo en el file de css
    }
}*/

//formLoginHTML.addEventListener('submit', handleLogin)
//formRegisterHTML.addEventListener('submit', handleLogin)

// SI EL USERNAME TIENE MENOS 4 CARACTERES: mostrar un texto de error que diga 'El username debe tener al menos 4 caracteres (linea 33)

/*
username tiene que tener una mayuscula, un '-' y almenos 4 caracteres
password tiene que tener una mayuscula y un '#'
email Debe ser email (usar la expresion regular)
Si el error el multiple EJEMPLO, el username y el password esta mal, tirara 2 textos, es decir cada input tendra su posibilidad de fallar
Si esta todo bien por consola diran 'exito'
*/

const validarMayuscula =(texto) =>{
    let textoMinuscula = texto.toLowerCase()
    return textoMinuscula !== texto
}


const VALIDACIONES = {

    password: {
        validacion:(texto) =>  (/(?=.*[A-Z])(?=.*#).+/.test(texto)),
        errorText: 'La password es incorrecta'
    },
    email: {
        validacion: (email) => (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)),
        errorText: 'El email es incorrecto'
    },
    username: {
        validacion: (texto) => (/(?=.*[A-Z])(?=.*-).{4,}/.test(texto)),
        errorText: 'El username es incorrecto'
    }

}



const obtenerValoresFormulario = (formulario) => {
        
    const inputs = ['username', 'password', 'email']//creo una variable que es un array con 3 elementos strings, cada uno de estos string lo vamos a transformar en un          
    const inputsInfo = {}// acumulador de objetos
    for(let input of inputs){ //por cada input de mi array de 3 elementos (inputs)
        const spanErrorHTML = formulario.querySelector('.error-text-' + input) //creo la constante que va a ir guardando el span de error de cada elemento
        const valor = formulario[input].value
        inputsInfo[input] = {//estoy creando una propiedad y le asigno un objeto por eso lo pongo entre[] no quiero modificar cada input, quiero crear ej:{
                                                                                                                                //   'username': {   estoy creando la propiedad username y le estoy asignando un objeto
                                                                                                                                 //              },
                                                                                                                                 //  
                                                                                                                                 //   'password':{    estoy creando la propiedad password y le estoy asignando un objeto
                                                                                                                                 //              },
                                                                                                                                 //  
                                                                                                                                 //   'email':{       estoy creando la propiedad email y le estoy asignando un objeto
                                                                                                                                //            }
                                                                                                                                //   }
            errorHTML: spanErrorHTML,//esta guardando la referencia del span, que llamamos por su clase
            validacion: VALIDACIONES[input].validacion,//esta guardando la referencia de la funcion validadora
            errorText: VALIDACIONES[input].errorText,//esta llamando del objeto de validaciones al texto de error, lo que nos deja un objeto con:la referencia del span
                                                                                                                                                //la validacion
                                                                                                                                                //y el texto de error
            valor: valor //va a ser igual al value
        }
    }
    return inputsInfo //RETORNAMOS EL OBJETO!!!!! 
}


const formLoginHTML = document.getElementById('form-login')


const handleSubmit = (evento) =>{
    evento.preventDefault()
    const formulario = evento.target//guardo en una const el elementoHTML 'formulario'
    const valoresFormulario = obtenerValoresFormulario(formulario)//queremos obtener valores del formulario, invocamos a la function donde guardamos todos los valores de nuestro formulario y los guardamos en una const, ahora valoresFormulario tiene guardados todos los valores porque guardamos la function donde obtuvimos todos esos valores
    console.log(valoresFormulario)//nos muestra nuestro objeto formulario así corroboramos si está pasando lo que nosotros queremos
    for(const propiedad in valoresFormulario){//aca usamos el for in por que necestitamos iterar solo en las propiedes de nuestro objeto
        const objetoInputFormulario = valoresFormulario[propiedad]//guardamos cada propiedad en una variable const
        if(!objetoInputFormulario.validacion(objetoInputFormulario.valor)){//y aca aplicamos la magia, si !el valor
            objetoInputFormulario.errorHTML.innerText = objetoInputFormulario.errorText
        }
        else{
            objetoInputFormulario.errorHTML.innerText = ''// limpiamos el texto de error si se cumple la validacion
        }
        
    }
}
/*
a handleSubmit, le paso el formulario, luego le pido que obtenga valores de ese formulario, nos crea el objeto.
*/

formLoginHTML.addEventListener('submit', handleSubmit)



/* 
Hacer un formulario para productos

Titulo: string con mas de 6 caracteres
Precio: numero valido 
Descripcion (textarea): string con mas de 100 caracteres
stock: numero valido
Codigo: string pero que tenga un # por delante EJ: '#aj504'/ '#pepe' / '#123'

*/


























/*
const formTareaHTML = document.getElementById("form-tarea")



const handleFormTarea = (evento) => {
    evento.preventDefault()
    console.log('Se envió el formulario')
    const formulario = evento.target 
    const username = formulario.username.value
    const password = formulario.password.value
    const email = formulario.email.value

    console.log(formulario)

  // Validar username
  while (!validarUsername(username) || null) {
    const errorTextUsernameHTML = document.getElementById("form-username")
    errorTextUsernameHTML.innerText = 'ERROR: El username debe tener una mayúscula, un "-" y al menos 4 caracteres';
}

// Validar password
if (!validarPassword(password)) {
    const errorTextPasswordHTML = formulario.form-password.error-password
    errorTextPasswordHTML.innerText = 'ERROR: El password debe tener una mayúscula y un "#"';
} 
console.log(errorTextPasswordHTML)

// Validar email
if (!validarEmail(email)) {
    const errorTextEmailHTML = formulario.form-email.error-email
    errorTextEmailHTML.innerText = 'ERROR: El formato de email ingresado no es válido';
} 
}

//const formTareaHTML = document.getElementById('form-tarea');
formTareaHTML.addEventListener('submit', handleFormTarea);


/*
    if (!validarUsername (username) || null){
        const errorTextUsernameHTML = document.getElementById("error-text-username")
        errorTextUsernameHTML.innerText = 'ERROR: El username debe tener una mayuscula, un '-' y al menos 4 caracteres'
    }
    if (!validarPassword (password) || null){
        const errorTextPasswordHTML = document.getElementById("error-password")
        errorTextPasswordHTML.innerText = 'ERROR: el password debe tener una mayuscula y un "#"'
    }
    if (!validarEmail (email) || null){
        const errorTextEmailHTML = document.getElementById('error-email')
        errorTextEmailHTML.innerText = 'ERROR: el formato de email ingresado no es válido'
    }
}
formTareaHTML.addEventListener('submit', handleFormTarea)*/




