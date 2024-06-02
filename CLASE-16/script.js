//ANALISIS DE UNA FUNCIÓN EN PARTICULAR:

/*function esVocal(letra){
    if (letra === "a" || letra === "e" || letra === "i" || letra ==="o" || letra ==="u"){
        return true;
    }
    else{
        return false;
    }
}*/ //ESTO VA A FUNCIONAR, PERO SE PUEDE SIMPLIFICAR, OPTIMIZAR:
function esVocal(letra){
    const vocales = ['a', 'e', 'i','o', 'u']
    return vocales.includes(letra);
}
//EJEMPLO DE USO:
console.log(esVocal("a")); //true
console.log(esVocal("b")); //false



//const nombres = ['pepe', 'juan', 'maria']

/*por cada nombre quiero que aparezca un  mensaje por consola diciendo 'hola {nombre}'
NECESITAMOS UN FOR, QUE SE REPITA LA CANTIDAD DE VECES COMO ELEMENTOS TENGA EN MI ARRAY
console.log('Hola ' + nombres[0])
console.log('Hola ' + nombres[1])
console.log('Hola ' + nombres[2])
console.log('Hola ' + nombres[3])

PARA SIMPLIFICAR ESTO ESTA EL BUCLE FOR, QUE CON EL .LENGTH NOS VA A RECORRER TODO NUESTRO ARRAY 
SIN NECESIDAD DE QUE NOSOTROS SEPAMOS LA CANTIDAD DE ELEMENTOS QUE TENEMOS DENTRO (esta es la función del .length)
*/

/*for(let iterador = 0; iterador < nombres.length; iterador = iterador +1){
    //console.log(iterador)=> me va a mostrar 0, 1, 2, 3...iterador va del 0 al 3...entonces si en vez de que me muestre el iterador
    //quiero que me muestre el nombre de cada elemento de mi arra y, tengo que:
    console.log('Hola ' + nombres[iterador]) //ESTO ES RECORRER UN ARRAY, ES DE BUENA PRACTICA USAR INDEX EN VEZ DE ITERADOR CUANDO ESTAMOS EN ARRAYS
}*/

//ES MEJOR GUARDAR EN UNA VARIABLE CADA ELEMENTO DE CADA INDEX SI VAMOS A HACER UN BUCLE, DE LA SIGUIENTE MANERA:

/*for(let index=0; index < nombres.length; index=index+1){
    let nombre = nombres[index]     //Notemos que el nombre de la variable en la cual guardamos cada elemento es el singular  ..
    console.log('Hola ' + nombre)   //del nombre donde tenemos el array de todos los elementos--
}*/

const carrito=[
    {
        nombre: 'tv samsung',
        precio: 300,
        cantidad: 3
    },
    {
        nombre: 'patineta',
        precio: 30,
        cantidad: 1
    },
]
/* Por cada elemento de mi carrito mostrar por consola:
Has comprado el producto: {producto.nombre} x {producto.cantidad} a un precio unitario de ${producto.precio}
*/ 
/*for(let index = 0; index < carrito.length; index=index+1){
    const producto = carrito[index]
    //console.log(carrito)
    console.log ('Has comprado el producto: ' + producto.nombre + ' x ' + producto.cantidad + ' a un precio por unidad de: $ ' + producto.precio)

}*/
/*
let sumatoriaEdad = 0
const personajes =[
    {
        nombre :'pepe',
        apellido: 'suarez',
        edad: 40
    },
    {
        nombre:'maria',
        apellido:'cassanova',
        edad: 20
    },
    {
        nombre:'ezequiel',
        apellido:'rodriguez',
        edad: 35
    },
]*/

/*
Por cada personaje mostrar el siguente mensaje por consola
'Hola mi nombre es {personaje.nombre} {personaje.apellido} y tengo {personaje.edad} años'
Opcional:
Al finalizar el recorrido mostrar por consola 'total de edades: {sumatoria de las edades de los usuarios}'
*/
/*
for(let index = 0; index < personajes.length; index=index+1){
    const personaje = personajes[index]
    console.log('Hola mi nombre es: ' + personaje.nombre + ' ' + personaje.apellido + ' y tengo ' + personaje.edad + ' años de edad')
    sumatoriaEdad = sumatoriaEdad + personaje.edad  //sumatoriaEdad va a tomar el valor de si misma (0) + la edad de cada personaje,
    console.log('La sumatoria de todas las edades es de: ' + sumatoriaEdad + ' años') //ESTA DENTRO DEL FOR, O SEA, RECORRE EL ARRAY TAMBIEN.
}  */                                                                                     



//____________------ESTA ES LA MEJOR DE TODAS LAS TECNICAS PARA TRABAJAR CON LOS FOR------______________

/*for(let index = 0; index < personajes.length; index=index+1){//recorre el array
    const personaje = personajes[index] //crea la variable para guardar cada elemento del array
} 
//SE HACE LO MISMO PERO SIMPLIFICADO CON EL FOR OF
for(const personaje of personajes){ //recorre el array personajes y crea la variable personaje donde guarda cada elemento/objeto del array
    console.log(personaje)
}*/

/*ir al ejercicio anterior y hacerlo con for of*/

/*const carrito=[
    {
        nombre: 'tv samsung',
        precio: 300,
        cantidad: 3
    },
    {
        nombre: 'patineta',
        precio: 30,
        cantidad: 1
    },
]
for(producto of carrito){
    console.log(producto)
}*/

//Siempre que queramos recorrer el array de principio a fin y pasando por todos los elemento nos sirve el for of
//ahora, si queremos hacer una recorrida específica del array (desde determinado index, de final al principio, etc) vamos a tener que 
//especificarlo con el for, no nos sirve el for of

//__________________---------FOR IN----------___________________( recorre las propiedades/atributos de un objeto, las keys)

const datos ={
    nombre: 'pepe',          
    apellido: 'suarez',
    dni: 34456765,
}
let resultado = ' '  //vamos a crear un string, una plantilla de resultado que va a ser = a '' (comillas vacías) ACUMULADOR DE STRINGS!!!!       
for(let propiedad in datos){//me esta creando la variable propiedad donde se va a guardar cada key (nombre, apellido, dni)                   
    resultado = resultado + '\n' + propiedad + ': ' + datos[propiedad]//datos[propiedad]está entrando al valor de cada propiedad del objeto 
                                                                //en resultado voy a acumular cada iteración y voy a mostrar cada propiedad 
                                                                //con su valor: nombre: pepe
                                                                //apellido: suarez
}                                                                             //dni: 34456765
console.log(propiedad) //me va a mostrar las propiedades del objeto: nombre                                                          
                                                                  // apellido
                                                                  // dni
console.log(resultado) ////me va a mostrar las propiedades del objeto y sus valores: nombre : pepe                                                             
                                                                                  // apellido : suarez
                                                                                  // dni: 34456765

//_______________________------MÉTODOS AVANZADOS DE ARRAYS------___________________

//(Aprender solo la sintaxis, y como y cuando utilizarlos, mas adelante sabremos como funcionan)
//Le decimos avanzado a un método que recibe una callback

const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 40
    },
    {
        nombre: 'maria',
        apellido: 'cassanova',
        edad: 20
    },
    {
        nombre: 'ezequiel',
        apellido: 'rodriguez',
        edad: 35
    }
]


for(const personaje of personajes){
    console.log(personaje)
}
//____________________________________________----.forEach(function(parametro){})_______________________________________________

personajes.forEach(function (personaje){//en personajes.por cada elemento(le paso una function anónima y le doy un parámetro (personaje))
                                        //recibe por parámetro el objeto de mi array, 
    console.log(personaje)        //que me muestre cada elemento/objeto (personaje), esto es = al for of, solo que en el 1ro, personaje 
                                  //es una const, y en forEach es un párametro, igual se puede acceder al elemento
})

//_____________________________________________----.filter(function(parametro){})________________________________________________

personajes.filter(function(personaje){ //el .filter va a recibir por parámetro en la función(callback) el elemento y voy a retornar una condicion
    return personaje.edad <= 18        //este filtro me va retornar array(siempre) con la condicion q retorna la callback,
                                       //como sé que filter me ca a retornar algo lo puedo guardar en una variable: Ej.const personajesMayoresDeEdad
    
})
const personajesMayoresDeEdad = personajes.filter(function(personaje){
    return personaje.edad >= 18
})
console.log(personajesMayoresDeEdad)
//.filter es un método avanzado que recibe unua callback, la callback recibe al elemento.
//Si el valor de retorno de la callback es truly, entonces el elemento se va a agregar al array que retorna el método, 
//Si el valor de retorno de callback es falsy, entonces se va a ignorar y se pasa al siguiente elemento.
//FILTER SIEMPRE RETORNA UN ARRAY!!! 
//Si el array es vacío significa q ningún elemento pasó el filtro.


// EJERCICIO:

/*const productos = [
    {
        nombre: 'tv samsung',
        marca: 'samsung',
        id: 1,
        precio: 3000
    },
    {
        nombre: 'celular samsung',
        marca: 'samsung',
        id: 4,
        precio: 1100
    },
    {
        nombre: 'tv LG',
        marca: 'LG',
        id: 2,
        precio: 2900
    },
    {
        nombre: 'tv noblex',
        marca: 'noblex',
        id: 3,
        precio: 2300
    },
]
/*
-Traer los productos que sean de precio inferior a 2950
-Traer los productos de la marca noblex
-Traer los productos que en su nombre incluyan el string 'tv'
*/

/*
const productosMasCaros = productos.filter(function(producto){
    return (producto.precio < 2950)
})

const productosNoblex = productos.filter(function(producto){
    return (producto.marca.toLowerCase() =='noblex'.toLowerCase())
})

const productosTv = productos.filter(function(producto){
    return (producto.nombre.toLowerCase().includes('tv'.toLowerCase()))
})
console.log(productosMasCaros)
console.log(productosNoblex)
console.log(productosTv)
*/


//______________________________________________----.find(function(parametro){})___________________________________________________

//.find es un método avanzadoque recibe uun callback.  la callback recibe al elemento.
// Si el valor de retorno de la callback es truly, entonces el elemento se retornará y se cortará el find.
// Si el valor de retorno de callback es falsy, entonces se va a ignorar, y se pasa al siguiente elemento.
//FILTER TAMBIÉN SIEMPRE RETORNA UN ARRAY!!! 
//si el array es vacío significa q no existe el elemento buscado.
//.find retorna el primer elemento que cumpla con la condición, si no existe retorna undefined.

const pepe = personajes.find(function(personaje){
    return (personaje.nombre.toLowerCase() === 'pepe')
})
console.log(pepe)


/* 
Dependiendo de la situación debemos disernir que método es el mas indicado, Ej: 
Si vamos a buscar un elemento por su Id, entonces vamos a usar un .find, por que el Id es único. 
Si la consigna es traer a todos los alumnos aprobados del último cuatrimestre, entonces va a ser un .filter.
Si nos dicen que por cada alumno debemos enviar un email, eso es un .forEach
TODAS ESTAS ACCIONES ADEMAS LAS PODEMOS HACER CON UN FOR (of o in) CUALQUIER METHOD DE JS ES POR DETRÁS UN FOR!! ...DE LA SIGUIENTE FORMA:
*/

const personajesMayores = [] //------------------ ACUMULADOR (vacío por que aun no se cuantos personajes son mayores)
for (const personaje of personajes){
    if (personaje.edad >= 18){
        personajesMayores.push(personaje)  //--------pone los elementos que cumplan la condición al final de array
    }
    console.log(personajesMayores)
}

//.filter (como todos los demás métodos) es una forma nativa que tiene JS para ya tener resuelto con un method algo que, de otra
//forma, tendríamos que utilizar más lógica y más código para resolver.


/*________________________________-----------.map(function(parametro){})--------------_______________________________________

nos sirve para crear un array en base a otro array.
Va a recorrer el array y por cada elemento la callback va a ejecutarse, el valor de retorno de la callback es el valor del nuevo elemento
que se agregará  al array resultante
ojo !! CREA EL ARRAY! Y OBVIAMENTE RETORNA SIEMPRE UN ARRAY
*/

const objetos =[
    {
        nombre: 'vaso'
    },
    {
        nombre: 'tornillo'
    },
    {
        nombre: 'computadora'
    }
]

/*
quiero que pase lo siguiente:
 1) quiero un array de strings '','',''
 2) quiero que cada que string tenga un formato determinado: ( en este caso quiero q sean divs)'<div></div>', '<div></div>','<div></div>'
 3) quiero que cada div aparezca el nombre del objeto:'<div>vaso</div>', '<div>tornillo</div>','<div>computadora</div>'
 COMO FUNCIONA EL .MAP?:
*/
const listaDeObjetosHTML = objetos.map(function(objeto){
    return '<div>' + objeto.nombre + '</div>' 
})
console.log(listaDeObjetosHTML) 

/*
Va a recorrer el array y por cada elemento la callback va a ejecutarse, El valor de retorno de la callback va a ser el nuevo valor 
que le asignamos en el return y va a agregarse al array resultante y así hasta que se terminen los elementos.
EL .MAP MAPEA Y TRANSFORMA UN ARRAY INICIAL, EN OTRO ARRAY CON LAS CARCTERÍSTICAS QUE LE INDIQUEMOS
*/

//OTRO EJEMPLO:

const resultadoX = objetos.map(function(objeto){
    return false
})
console.log(resultadoX) // [false, false, false]

//OTRO EJEMPLO:
const resultadoY = objetos.map(function(objeto){
    return 'este objeto ha sido mapeado y transformado en un string'
})
console.log(resultadoY) // ['este objeto ha sido mapeado y transformado en un string', 'este objeto ha sido mapeado y transformado 
                            //en un string', 'este objeto ha sido mapeado y transformado en un string']

//Y SE PUEDE HACER A LA INVERSA ADEMAS:

const nombreObjetos = [ 'vaso', 'tornillo', 'computadora']
const arrayInverso = nombreObjetos.map(function(objeto){
    return  {nombre: objeto}
})
console.log(arrayInverso) // [{nombre: 'vaso'}, {nombre: 'tornillo'}, {nombre:'computadora'}

//CON ESTO VEMOS QUE LOS ELEMENTOS SON COMPLETAMENTE MANIPULABLES CON .MAP 

/*
TAREA:
investigar:
.some() = sirve para saber si algun elemento cumple con x condición.
.every() = sirve para saber si todos los elementos cumplen con x condición.
.findIndex() = sirve para buscar el index de x elemento.
*/



