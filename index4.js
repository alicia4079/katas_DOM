//Ejercicio 4.1

const btnToClick = document.querySelector('#btnToClick')
btnToClick.addEventListener('click', clickButton)

//Eerjcicio 4.2

const handleFocus = (event) => {
  const inputValue = event.target.value
  console.log('Valor del input:', inputValue)
}

const inputFocus = document.querySelector('focus')
inputFocus.addEventListener('focus', handleFocus)

//Ejercicio 4.3
const input2 = document.querySelector('.value')
input2.addEventListener('input', (e) => console.log(e.target.value))

const clickButton = (event) => {
  console.log(event.target)
}
