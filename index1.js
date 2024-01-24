const button = document.querySelector('.showme')
console.log('button', button)

const title = document.querySelector('#pillado')
console.log('title', title)

const paragraphs = document.querySelectorAll('p')
console.log('paragraphs', paragraphs)

const pokemon = document.querySelectorAll('.pokemon')
console.log('pokemon', pokemon)

const atribut = document.querySelectorAll('[data-function="testMe"]')
console.log('atribut', atribut)

const thirdCharacter = document.querySelector(
  '[data-function="testMe"]:nth-child(3)'
)
console.log('thirdCharacter', thirdCharacter)
