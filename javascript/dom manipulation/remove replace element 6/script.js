//CREATE ELEMENT
const newHeading=document.createElement('h2')
//add id to h2
newHeading.id='my-title'

newHeading.appendChild(document.createTextNode('first task'))

//get the old heading

const oldHeading=document.querySelector('h1')

//get parent element
const parentDiv=document.querySelector('div')


//replace the element
parentDiv.replaceChild(newHeading,oldHeading)

//REMOVE ELEMENT
const ul=document.querySelector('ul')
const li=document.querySelectorAll('li')
//remove list item
li[0].remove()
//remove child element
ul.removeChild(li[1])

//CLASSES AND ATR
const second_ul=document.querySelector('.second-ul')
const val=second_ul.children[1]

console.log(val.className);

console.log(val.classList);

console.log(val.classList[1]);

val.classList.add('mb-5')
console.log(val.classList);

val.classList.remove('mb-5')
console.log(val.classList);


// Attributes

//get attr
console.log(val.getAttribute('class'));
console.log(val.getAttribute('style'));
//set attr
val.setAttribute('id','second')
//remove attr
val.removeAttribute('style')



