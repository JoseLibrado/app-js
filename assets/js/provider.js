const urlApi = 'https://reqres.in/api/users?page=2'

const getPeople = async () => {
    
    try {
        
        let resp
        if( !(resp =  await fetch(urlApi)) ){
            throw 'No se pudo realizar la solicitud' + Error
        } 
        if( !resp ) throw 'No se pudo realizar la solicitud'
        if( !resp.ok ) throw 'Hay problema con la respuesta de la peticion'

        const data = await resp.json()

        return data.data

    } catch (err) {
        throw 'ocurrio un error. ' + err
    }
    
}

export {
    getPeople
}