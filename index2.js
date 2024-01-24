//Ejercicio 2

const divElement = document.createElement('div')
document.body.appendChild(divElement)

const divWithP = document.createElement('div')
const pElement = document.createElement('p')
pElement.textContent = 'Este es un párrafo dentro del div'
divWithP.appendChild(pElement)
document.body.appendChild(divWithP)
console.log(divWithP)

//Ejercicio 2.3

const divConP = document.createElement('div')

for (let i = 1; i <= 6; i++) {
  const pElement = document.createElement('p')
  pElement.textContent = `Párrafo ${i}`
  divConP.appendChild(pElement)
}

document.body.appendChild(divConP)

//Ejercicio 2.4

const pWithText = document.createElement('p')
pWithText.textContent = 'Soy dinámico!'
document.body.appendChild(pWithText)

//Ejercicio 2.5
const fnH2 = document.querySelector('h2.fn-insert-here')
fnH2.textContent = 'Wubba Lubba dub dub'

//Ejercicio 2.6

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const listElement2 = document.createElement('ul')
listElement2.className = 'apps'

document.body.append(listElement2)

for (let i = 0; i < apps.length; i++) {
  const app = apps[i]

  const liElement = document.createElement('li')
  liElement.innerText = app
  listElement2.appendChild(liElement)
}

document.body.listElement2

//Ejercicio 2.7
const deleteNodos = document.querySelectorAll('.fn-remove-me')

for (let i = 0; i < deleteNodos.length; i++) {
  const deleteNodo = deleteNodos[i]
  deleteNodo.parentNode.removeChild(deleteNodo)
}

//Ejercicio 2.8

const newParr = document.createElement('p')
newParr.textContent = 'Voy en medio'

const divBefore = document.querySelector('.fn-insert-here:first-child')
const divAfter = document.querySelector('.fn-insert-here:last-child')

divBefore.parentNode.insertBefore(newParr, divAfter)

//Ejercicio 2.9

const divWithText = document.querySelectorAll('.fn-insert-here')

for (let i = 0; i < divWithText.length; i++) {
  const pInDiv = document.createElement('p')
  pInDiv.textContent = 'Voy dentro!'
  divWithText[i].appendChild(pInDiv)
}
