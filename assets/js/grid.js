import { crearHtml } from './dashboard.js'

let data, people

const setPeople = async (param) => {
    data = param
}

const peopleList = (div) => {
    div.innerHTML = ''
    //request to pople api
    let card
    for (const person of data) {
        const htmlDatos = `
            <img class="m-6" id="${person.id}" src="${person.avatar}">
        `
        card = document.createElement('div')
        card.classList.add('mb-2')
        card.classList.add('photo')
        card.innerHTML = htmlDatos
        div.append(card)
    }
}

const accessView = (photos) => {

    for (const iterator of photos) {
        iterator.addEventListener('click', (item) => {
            // console.log(iterator.childNodes[1].src)
            let imgPath = item.composedPath()
            openView(imgPath[0].id)
        })
    }
}

const openView = (id) => {

    people = document.querySelector('#people')
    let htmlImg, borrar
    people.innerHTML = ''
    for (const iterator of data) {
        if (iterator.id == id) {
            htmlImg = `
                <img id="image" src=${iterator.avatar}>
                <ul class="list-group">
                    <li class="list-group-item">Name: <span>${iterator.first_name}</span> </li>
                    <li class="list-group-item">Last name: <span>${iterator.first_name}</span></li>
                    <li class="list-group-item">Email: <span>${iterator.email}</span></li>
                    <li class="list-group-item">Job: <span>no job</span></li>
                    <button class="btn" id="delete" ><span class="text-danger">DELETE</span></button>
                </ul>
            `
            break
        }
    }

    crearHtml(people, htmlImg, 'view-photo', ['view-class'])
    
    //borrar elemento
    deleteElement(document.querySelector('#delete'),id)
    
}

const deleteElement = (button,id) => {
    button.addEventListener('click', () => {
        confirmDelete(id)
    })
}

const confirmDelete = (id) => {
    console.log('confirmDelete container')  
    const html = `        
        <p><span>This person will be removed, are you agree?</span></p>
        <div class="row">
            <button class="btn text-success yes col-6" id="confirm"> <span>YES</span> </button>
            <button class="btn text-danger not col-6" id="no-confirm"> <span>NOT</span> </button>
        </div>     
    ` 
    const div = document.createElement('div')
    div.classList.add('confirm-delete') 
    div.classList.add( 'container') 
    div.classList.add('border') 
    div.classList.add('rounded') 
    div.classList.add('text-center') 
    div.classList.add('mb-1') 
    div.innerHTML = html
    people.prepend(div)
    
    document.querySelector('#delete').classList.add('hidden')

    document.querySelector('.yes').addEventListener('click',() => {
        let indice
        console.log('yes, do it')
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == id) {
                indice = data.indexOf(data[index])
                break
            }

        }
        data.splice(indice, 1)
        peopleList(people)
        accessView(document.getElementsByClassName('photo'))
    })
    document.querySelector('.not').addEventListener('click',() => {
        console.log('no, do not it')
        document.querySelector('#delete').classList.remove('hidden')
        let divConf = document.querySelector('.confirm-delete')
        people.removeChild(divConf)
    })    
}

export {
    setPeople,
    peopleList,
    accessView,
}