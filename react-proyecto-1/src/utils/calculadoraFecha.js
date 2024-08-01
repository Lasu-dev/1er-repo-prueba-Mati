/* En este archivo almacenamos funcionalidades de fecha */

const obtenerFechaHoy = () =>{
    const fecha = new Date()
    return fecha.getFullYear()
}

export {obtenerFechaHoy}