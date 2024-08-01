/*console.log('hola')//se ejecuta 1ro

console.log('chau')//se ejecuta 2da


prompt(alert()) //Cual se ejecuta 1ro? explicación:*/


//CALLSTACK: PILA DE LLAMADAS

/*
el primero que entra a la pila es el último que sale, tiene lógica, entonces:
1ro se resuelve el alert
2do se resuelve el prompt
*/

//VAMOS A EJECUTAR UNA FUNCIÓN ASINCRÓNICA:


/* Fetch (buscar) */// es una función asincrónica , antes tenemos que aprende que es una:
/* CONSULTA HTTP *///internet se basa en las consultas HTTP es una forma de transferir informacion, un protocolo de transferencia,
                  // hay un monton de protpocolos de transferencia, todas las paginas web utilizan este protocolo de transferencia, 
                  // por detrás, lo que yo estoy haciendo cuando entro a una pagina web es una consulta HTTP
                  //fetch emite una consulta http
/* fetch emite una consulta http */

/*
Como se emite una consulta http?, vamos a consumir nuestra primera API
que es una API, nosotros consumimos una Api y la api nos va a ir dando información en base a lo que nosotros estamos consumiendo
todas las aplicaciones web importantes tienen sus propias apis, como minimo una.
La api se ocupa de gestionar la comunicación entre la pagina web y la base de datos, se encarga de gestionar toda la consulta.
Es una aplicación que se está ejecutando en un servidor externo a la pag web que yo puedo consumir y hacer por ejemplo un GET y 
pedir una lista de mis productos y la api me va a devolver mis productos en formato JSON
La base de datos no debe estar en la pagina web por cuestiones de seguridad, por eso esta en un servidor externo
ejemplo: si yo hago una consulta a mi servidor:

GET http://miServidor.com/productos // cuando alguien haga un get se va a verificar que la persona que este haciendo el get esté autorizada
responde con JSON:{
    productos:[]
}
para consultar necesitamos una api (JSON Placeholder es una api de testeo, de prueba)
la api me va a devoler una respuesta que suele ser en formato JSON, yo le consulto a mi servidor y mi servidor me responde con un objeto de 
js(JSON) yo le puedo pedir a mi servidor que verifique quien entra a mi base de datos

*/
const URL_API = 'https://jsonplaceholder.typicode.com'//LAS CONSTANTES QUE GUARDAN DATOS PRIMITIVOS ES DE BUENA PRACTICA PONERLAS EN MAYUSCULA
//GUARDO LA URL DE LA API QUE ME VA A SERVIR PARA DESPUES PODER CONECTARME CON ESTA API.
//AHORA QUE TENEMOS LA DIRECCION PODEMOS HACER EL FETCH (la consulta):
//fetch es una funcion que espera recibir: el url de la api, el string de direccion de esa url y 1 objeto que son las opciones de configuracion de mi fetch
//entonces abro un objeto, indico que el metodo de consulta va a ser GET (x ej.)

/*const response= fetch(URL_API + '/users', { // '/users' es la direccion que queremos consumir de esa api de mi url busco los usuarios y tengo que indicarle a mi fetch que quiero que el metodo de mi consulta sea del tipo get
        method: 'GET'                        //le paso el get en objeto por que quiero pedirle varios datos o sea un objeto...voy a guardar fetch en una constante
})                                           //ASI COMO FETCH ME DEVUELVE UNA RESPUESTA LA GUARDO EN LA CONSTANTE RESPONSE
console.log(response)                          

//te va a mostrar una promesa, pendiente ajjajajaja (el pending es un estado de la promesa)
PROMESA  es un nuevo tipo de dato

/*
Una promesa tiene 3 estados posibles

                Resolved (fulfilled): cuando la promesa se resuelve
1° Pending: 
                Reject: cuando la promesa se rechaza

*/

/*
Callstack: que funcion se ejecuta primero???
response, se ejecuta primero por que proviene del fetch()
console.log, luego
el fetch() tiene que responder algo para que se pueda ejecutar el console.log, pero fetch es un código asincronico,  
y por eso no puede ser esperado por defecto, se va a ejecutar en simultáneo al console.log y para eso necesitamos 
crear un estado de respuesta provisorio, entonces la response o el fetch se resuelve momentáneamente (para que el console.log se pueda ejecutar)
respondiendo un 'pending'
fetch te manda un promese pendig para mandar la respuesta q el console.log necesita. y fetch necesita tiempo para responder
Como hacemos para esperar la respuesta de fetch y q el console.log me pueda dar la response del fetch y no un promese pending?
*/

//VOY A ENGLOBAR TODO EL CODIGO QUE ESCRIBI A LA FUNCION OBTENER USUARIO, NECESITO SI O SI CREAR UNA FUNCION ADEMAS DE TRABAJAR CON LA  SINCRONIA
// con el await convierto al fetch en sincrónico, le digo al console.log que espere la respuesta de fetch, asi el console espera a q fetch se resuelva para mostrarlo

//antes se hacia asi:
/*async function obtenerPosts (){
    const response = await fetch(URL_API + '/posts', {
        method: 'GET',
    })
    
    console.log(response)
    console.log('resuelto')
}
obtenerPosts()*/


/*const obtenerUsuarios = async () =>{//voy a decir que mi función va a trabajar con código asincrónico con la palabra reservada async, siempre va antes del parámetro
    const response = await fetch(URL_API + '/users', {//vamos a tener q aguardar a q fetch se resuelva para ejecutar la funcion con la palabra reservada await 
        method: 'GET'//todo el codigo aguarda a que se resuelva el fetch para seguir ejecutandose
    }) 
    
    const data = await response.json()// si no le pongo el await a response.json me va a retornar un promese pending, 
    console.log(data)

    console.log ('Esta es la respuesta: ', response)  //cuando fetch se resuelva nos va a mostrar el response..no puedo trabajar con el pending, necesito trabajar con la respuesta
    console.log('resuelto')
}

obtenerUsuarios()*/
/*
EL OBJETO RESPONSE ME INDICA DATOS DE COMO FUE LA CONSULTA, LA RESPONSE NO ES LA RESPUESTA, ES EL STATUS DE LA RESPUESTA ..
PARA QUE ME TRAIGA LA RESPUESTA EN LUGAR DE LA INFORMACION DE EL STATUS DE LA RESPUESTA, NECESITO LA CARGA ÚITL DE LA REAPUESTA, EL JSON, 
ENTONCES PARA ESO ES QUE HAGO : const data = await response.json()// si no le pongo el await a response.json me va a retornar un promese pending, 
    console.log(data)
ESO ES OBTENER EL JSON DE LA RESPONSE, Y LO GUARDAMOS EN LA CONSTANTE DATA
COMO JSON ME DEVUELVE UNA PROMESA, ENTONCES ES UNA FUNCION ASINCRONICA, ENTONCES??? LE MANDAMOS EL AWAIT PARA QUE PUEDA VERLO EN  EL CONSOLE.LOG
*/

/*const obtenerPosts = async () =>{
    const response = await fetch(URL_API + '/posts', {
        method: 'GET'
    }) 
    
    const data = await response.json()
    console.log(data)

    console.log ('Esta es la respuesta: ', response)  
    console.log('resuelto')
}

obtenerPosts()*///si ponemos await obtenerPost(), entonces se va a ejecutar la data de obtenerPost una vez que se haya ejecutado la data de obtenerUsuarios


/* 
Si fetchean a esta direccion: https://jsonplaceholder.typicode.com/users/1
Obtendran el detalle de un usuario
El usuario tendra este formato
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}

Mostrar en HTML dentro de un div

h2: {user.name}
span: phone: {user.phone}
span: email: {user.email}
*/


/*
const obtenerDatoUsuario1 = async (id) =>{
    const userInfoHTML = document.getElementById("user-info")

    userInfoHTML.innerHTML = `<h2> Cargando...</h2>`

    const response = await fetch(URL_API + '/users/'+ id, {
        method : 'GET'
    })
    const user = await response.json()
    console.log('mi usuario'+ user)

    userInfoHTML.innerHTML = `
    <h2> NOMBRE: ${user.name}</h2>
    <span> TELEFONO: ${user.phone}</span>
    <br>
    <span> EMAIL: ${user.email}</span>
    `
    console.log('MI CODIGO'+ user)
    console.log(response)
    
}
obtenerDatoUsuario1(1)

const obtenerUsuarioPorId = async (id) =>{
    const userInfoHTML =document.getElementById("user-info")

    userInfoHTML.innerHTML = `<h2>Cargando...</h2>`

    const response = await fetch (URL_API + '/users/' + id,{
        method: 'GET'
    })
    const user = await response.json()

    renderizarUsuario (user)

}

const renderizarUsuario = (user)=>{
    const userInfoHTML = document.getElementById('user-info')
    userInfoHTML.innerHTML = `
    <h2> NOMBRE: ${user.name}</h2>
    <span> TELEFONO: ${user.phone}</span>
    <br>
    <span> EMAIL: ${user.email}</span>
    `
    
}
obtenerUsuarioPorId(2)*/



//codigo de mati en la clase con callback 100% correcto: 

const buscarUserPorId = async (id) =>{
    const response = await fetch(URL_API + '/users/' + id, {
        method: 'GET'
    })
    const user = await response.json()
    return user
}

const renderizarUsuario = async ( valorBusqueda, buscarUsuarioCallback ) => {
    const userInfoHTML = document.getElementById('user-info')
    userInfoHTML.innerHTML = `<h2>Cargando...</h2>`

    const user = await buscarUsuarioCallback(valorBusqueda)

    userInfoHTML.innerHTML = `
    <h2>Nombre: ${user.name}</h2>
    <span>Email: ${user.email}</span>
    <br>
    <span>Phone: ${user.phone}</span>
    `
}
console.log(renderizarUsuario)

renderizarUsuario(1, buscarUserPorId)

//QUE HIZO MATI PARA QUE EL CODIGO SE EJECUTE CORRECTAMENTE?

