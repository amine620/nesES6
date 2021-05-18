//document.getElementById()
let val=document.getElementById('my-ul')


//Get things from the element

val=document.getElementById('my-ul').id
val=document.getElementById('my-ul').className


//change styling
const ul=document.getElementById('my-ul')
ul.style.backgroundColor='#333'
ul.style.color='red'
ul.style.padding="30px"
ul.style.display='flex'
ul.style.justifyContent='space-between'


//change content

ul.textContent='task list'
ul.innerText='task list'
ul.innerHTML='<h1>task list</h1>'



//querySelector()




console.log(document.querySelector("#my-ul-2 li:last-child").style.color='green');
console.log(document.querySelector("#my-ul-2 li:nth-child(1)").style.color='red');
console.log(document.querySelector("#my-ul-2 li:nth-child(2)").style.color='blue');
console.log(document.querySelector("#my-ul-2 li:nth-child(even)").style.background='gray');