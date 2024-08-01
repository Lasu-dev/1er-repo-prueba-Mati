export const fetcheando = async ()=>{
    const response = await fetch('/api/products')
    return response.json()
}

export{fetcheando}

//esto es JS, debe tener la extención .js por que no tiene JSX, no hay componentes aquí