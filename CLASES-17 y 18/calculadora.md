### CALCULADORA

Funcionalidades:

CALCULADORA:

-tener soporte para para las siguientes operaciones : +, -
        -'+'
        -'-'

HISTORIAL:

-historial

LOGIN: 

-crear usuario (esta se ejecuta al entrar a la calculadora)
        -email=> debe estar validado


Utilidades:

-validacion
-opcion de CANCELAR

INGRESO DE DATOS:

-prompt

EGRESO DE DATOS:

-alert

LOGIN:

-Prompt que va a solicitar al usuario un email
-validamos que es email sea un email con una expresion regular

RegEx / expresión regular:
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailAVerificar)  nos retorna un boolean (.test es un metodo)
false: volvera a solicitar el email
true: dira email registrado

una vez solicitado el email vamos a solicitar password
Validaremos que tenga una letra en mayuscula
que no sea null o ''
que tenga al menos 6 caracteres
En caso de que no volvera a solicitar
En caso de que si sea valido dira password registrada {password}

Todo el logeo debe estar adentro de una funcion 
Recomendacion:
Pueden usar todas las funciones o crear las funciones que crean necesarias

login()  LOGIN DEBE RETORNAR UN OBJETO USUARIO:
{
    email: value,
    password: value
}

