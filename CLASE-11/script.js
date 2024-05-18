/* TIPOS DE DATOS */ /* ALT + SHIFT + A */

/* Datos obejo: proximamente..... */

/* Datos primitivos:

Number=> numeros como los conocemos nosotros 
Ej:
8
0
-2
3.14 (no es decimal, es flotante (float)) 
Nan (mas adelante vamos a ver que es)
Infinity

String => textos, deben ir entre comillas ("", '' y `` )
Ej:
'hola mundo'
"Pepe"
'8'
NaN

Boolean (George Boole) => valores true-false

Null => ausencia o nulidad de un dato
ej:
null

Undefined => no hay un dato definido
ej:
Undefined
*/

/*Soy un mensajero que debe entregar una carta, llego a la casa , me atienden y me dicen que NO quieren recibir la carta.
estado_de_respuesta: false 

Soy un mensajero que debe entrega una carta, llega a la casa , me atienden y me dicen que quieren recibir la carta
estado_de_respuesta: true

Soy un mensajero que debe entregar una carta, me extravío en el camino
estado_de_respuesta: undefined

Soy un mensajero que debe entregar una carta, llego a la casa , no me atienden
estado_de_respuesta: null
*/

/*CONSTRUCTORES*/
/*
String(dato)=> transforma nuestro dato en un string,
Number(dato)=> tranforma nuestro dato en un number, 
Boolean(dato)=> transforma nuestro dato en un boolean,
Null(dato)=> transforma nuestro dato en un null,
Undefined(dato)=> transforma nuestro dato en un undefined,

*/


/* OPERADORES ARITMETICOS. (typeof es un comando que nos dice ante que tipo de dato estamos ej. typeof(1 + 1) => number) */

/*SIEMPRE DEVUELVE STRING:

+ = CONCATENACIÓN 
La concatenación ocurre cuando uno de los valores es de tipo de dato STRING.


SIEMPRE DEVUELVE NUMEROS:

+ = Suma
- = resta
* = multiplicación
/ = división
% = resto de la división o módulo
** = potencia
*/


/* EN JACASCRIPT EXISTEN LOS VALORES FALSY O TRUTHY */ 

/*TRUSTHY (Son aquellos datos que si los paso por boolean(dato) me devuelve un true): infinitos*/

/* FALSY (Son aquellos datos que si los paso por boolean(dato) me devuelve un false): false, 0, -0,  null, undefined, NaN, "" (string vacío) */


/*-------FUNCIONES NATIVAS DE JS-------*/

/*
typeof()=> Nos va a decir que tipo de dato ee el dato que le indiquemos definir.
isNan()=> Nos devuelve un booleano dependiendo de si un dato es un NaN o no.



/*------ COMPARADORES------*/

/*SIEMPRE DEVUELVEN BOOLEANOS/*

/* 

== => igualdad 
=== => igualdad estricta => Compara tanto igualdad  de valor como igualdad de tipo de dato.
!= => desigualdad (diferencia)
!== => desigualdad estricta (estricta diferencia)=> Compara tanto diferencia de valor como diferencia de dato. 
< => menor que
> => mayor que
(mayor que y menor que funcionan como conocemos bien con los numeros, pero al ser usados con string se rige por los valores del codigo ASCII)
<= => menor o igual que
>= => mayor o igual que

La forma correcta de formular estas comparaciones es comenzando con la consigna: "Es verdad que...."
ej:
1 == "1" => Es verdad que 1 es == a "1"? => true
1 != "1" => Es verdad que 1 es != de "1"? => false
1 !== "1" => Es verdad que 1 es !== de "1"? => true
*/

/*---------EJERCICIOS----------*/

/*Escribir el tipo de dato y el resultado de las siguientes declaraciones:

1. 1 == "1" => true
2. 1 === "1" => false
3. ''==false => true
4. 0==false => false
5. 0==null => false
6. 0==undefined => false
7. 0==NaN => false
8. null==NaN => false
9. undefined==NaN => true
10. 0=="" => false
11. 'pepe'+'' => false
12. 4-'8' => -4
13. 4-'8'+'8' => '-48' ahí tenés!! jajaja
14. Nan+'' => undefined
15. true ==1 => true
16. undefined !=1 => true
17. null != null => false
18. 5 + null => 5
19. 5 + undefined => NaN
20. 5 + null + undefined => NaN
21. '' == null => false
22. null + null => 0 
23. NaN != NaN => true
24. NaN === NaN => false
25. NaN == NaN =>  false
26. 1 + "'1'"  => "1 '1' "
27. 1 + "1"  => "11"
*/
/*typeof(NaN) =>
*/
