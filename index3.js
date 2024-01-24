// Ejercicio 3.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

const listElements = document.createElement('ul')
listElements.className = 'countries'

document.body.append(listElements)

for (let i = 0; i < countries.length; i++) {
  const country = countries[i]

  const liInd = document.createElement('li')
  liInd.innerText = country
  listElements.appendChild(liInd)
}
//Ejercicio 3.2
const deleteElement = document.querySelector('.fn-remove-me')
deleteElement.remove()

//Ejercicio 3.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']

const divPrintHere = document.querySelector('[data-function="printHere"]')
const listCar = document.createElement('ul')
listCar.className = 'cars'

document.body.append(listCar)

for (let i = 0; i < cars.length; i++) {
  const car = cars[i]
  const liElement2 = document.createElement('li')
  liElement2.textContent = car
  listCar.appendChild(liElement2)
}

divPrintHere.appendChild(listCar)

//Ejercicio 3.4
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

const container = document.querySelector('#container')

for (i = 0; i < countries2.length; i++) {
  const country2 = countries2[i]

  const divElement = document.createElement('div')
  const h4Element = document.createElement('h4')
  const imgElement = document.createElement('img')

  h4Element.textContent = country2.title
  imgElement.src = country2.imgUrl

  divElement.appendChild(h4Element)
  divElement.appendChild(imgElement)

  container.appendChild(divElement)
}

// Ejercicio 3.5

const container2 = document.querySelector('#container2')
const deleteLastBotton = document.querySelector('#deleteLastBotton')

function DeleteLastDiv() {
  const divs = container2.querySelectorAll('div')
  const lastDiv = divs[divs.length - 1]
  if (lastDiv) {
    container2.removeChild(lastDiv)
  }
}

deleteLastBotton.addEventListener('click', DeleteLastDiv)

//Ejercicio 3.6

function DeleteDiv(event) {
  const divToRemove = event.target.parentNode
  container2.removeChild(divToRemove)
}

for (let i = 0; i < countries2.length; i++) {
  const country = countries2[i]
  const divElement = document.createElement('div')
  const h4Element = document.createElement('h4')
  const imgElement = document.createElement('img')
  const deleteButton = document.createElement('button')
  h4Element.textContent = country.title
  imgElement.src = country.imgUrl
  deleteButton.textContent = 'Eliminar'
  deleteButton.addEventListener('click', DeleteDiv)

  divElement.appendChild(h4Element)
  divElement.appendChild(imgElement)
  divElement.appendChild(deleteButton)

  container2.appendChild(divElement)
}

//Ejercicio 4.1

const clickButton = (event) => {
  console.log(event.target)
}

const btnToClick = document.querySelector('#btnToClick')
btnToClick.addEventListener('click', clickButton)

//Eerjcicio 4.2

const handleFocus = (event) => {
  const inputValue = event.target.value
  console.log('Valor del input:', inputValue)
}

const inputFocus = document.querySelector('focus')
inputFocus.addEventListener('focus', handleFocus)
