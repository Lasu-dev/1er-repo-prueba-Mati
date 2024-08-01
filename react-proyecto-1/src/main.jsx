//Buena práctica todos los archivos jsx deben importar a react..es jsx tiene tipo de datos especiales que van a provenir de react,
// necesita react para ser interpretado
// SI DICE JSX LO IMPORTAMOS!!!!!
import React from 'react' 

//usamos ReactDOM para crear nuestro dom virtual (de react)
import ReactDOM from 'react-dom/client'//ReactDOM es la librería que nos permite crear un virtual DOM

//Importa el componente (funcion) App que tengo en App.jsx
//Los componentes son funciones que retornan JSX (JSX es un código muy parecido a HTML)
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(//esta linea de codigo esta creando un doom virtual en el elemento con id 'root'
                                                            //y luego dentro de este doom se ejecuta el metodo render que nos indica que 
                                                            //se va a renderizar algo dentro de este elemento
    <App />//va a renderizar lo que tenga de contenido el componente App que lo invocamos como a una funcion pero con esa sintaxis (<App />)
              // los componentes se escriben en mayúscula, tiene la misma sintaxis que una función pero retonra HTML
)
