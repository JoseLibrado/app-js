const urlApi = 'https://reqres.in/api/users?page=2'

const getPeople = async () => {
    
    try {
        const resp =  await fetch(urlApi)

        if( !resp ) throw 'No se pudo realizar la solicitud'
        if( !resp.ok ) throw 'Ocurrio un problema con la respuesta de la peticion'

        const data = await resp.json()

        return data.data
    } catch (err) {
        throw err
    }
    
}

export {
    getPeople
}