// import {peopleList} from './people-page.js'
import { getPeople } from './provider.js'
import {setPeople, peopleList ,accessView} from './grid.js'

const body = document.querySelector('#cell')
let btn

const html = `
    <p class="text-center title"> Fun-People </p>
    <button class="btn btn-primary"> <span> SEARCH </span> </button>
`
const crearHtml = ( divPhater, html, id, arrayClasses ) => {
    const div = document.createElement('div')
    div.setAttribute('id',id)
    arrayClasses.forEach(element => {
        div.classList.add(element)
    });
    div.innerHTML = html

    if(divPhater == undefined || divPhater == '' || divPhater == null)
    {
        body.append(div)
    } else {
        divPhater.append(div)
    }
}

const eventos = () => {  
    btn = document.querySelector('button')
    btn.addEventListener('click', async () => {
        btn.disabled = true
        setPeople(await getPeople())        
        btn.disabled = false
        peopleList(document.querySelector('#people'))
        //creating events on photo
        accessView(document.getElementsByClassName('photo'))
    })   
        
}

const init = () => {
    crearHtml(null,html,'ctrl',['mt-1','mb-2'])
    crearHtml(null,'','people',['mb-2','border-0','cell'])
    eventos()
}

//importar hacia el index
export {
    crearHtml,
    init
}