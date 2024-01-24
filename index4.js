//Ejercicio 4.1
const button = document.createElement('button')
button.id = 'btnToClick'

button.addEventListener('click', (e) => console.log(e))
document.body.appendChild(button)

//Ejercicio 4.2
const input = document.querySelector('.focus')
input.addEventListener('focus', (e) => console.log(e.target.value))

//Ejercicio 4.3
const input2 = document.querySelector('.value')
input2.addEventListener('input', (e) => console.log(e.target.value))
