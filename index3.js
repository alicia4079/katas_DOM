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

for (const country of countries2) {
  const div = document.createElement('div')
  const title = document.createElement('h4')
  const img = document.createElement('img')

  title.textContent = country.title
  img.src = country.imgUrl

  div.appendChild(title)
  div.appendChild(img)
  document.body.appendChild(div)
}

// Ejercicio 3.5

const buttonDeleteLast = document.createElement('button')
buttonDeleteLast.textContent = 'Eliminar el último'

function eliminarFN() {
  const allDivsToRemove = document.querySelectorAll('div')
  allDivsToRemove[allDivsToRemove.length - 1].remove()
}

buttonDeleteLast.addEventListener('click', eliminarFN)
document.body.appendChild(buttonDeleteLast)

//Ejercicio 3.6

const allDivsToRemove2 = document.querySelectorAll('div')

for (const div of allDivsToRemove2) {
  const button = document.createElement('button')
  button.textContent = 'Elimíname!'
  button.addEventListener('click', (e) => e.target.parentElement.remove())
  div.appendChild(button)
}
