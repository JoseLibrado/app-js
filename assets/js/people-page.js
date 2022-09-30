import { getPeople } from './provider.js'

const peopleList = async (div) => {
    //request to pople api
    let data = await getPeople()
    let card
 
    data.forEach( person => {
        const htmlDatos = `
        <ul class="list-group no-border">
            <li class="list-group-item text-center"></li>
            <li class="list-group-item text-center"><img src="${person.avatar}"></li>
            <li class="list-group-item">email: ${person.email}</li>
            <li class="list-group-item">Nombre: ${person.first_name}</li>
            <li class="list-group-item">Apelido: ${person.last_name} </li>
        </ul>
        `
        card = document.createElement('div')
        card.classList.add('mb-2')
        card.innerHTML =  htmlDatos
        div.append(card)
    })
}

export {
    peopleList
}