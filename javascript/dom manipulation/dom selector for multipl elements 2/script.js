//document.getElementsByTagName
let list=document.getElementsByTagName('li')
list[0].style.color='red'
list[0].textContent='updated text'

for (let i = 0; i < list.length; i++) {
   
  list[i].textContent='hello'
    
}

// querySelectorAll

const items=document.querySelectorAll('li')

for (let i = 0; i < list.length; i++) {
   
    items[i].textContent='hello 1'
      
  }

  const liOdd=document.querySelectorAll('li:nth-child(odd)')
  const liEven=document.querySelectorAll('li:nth-child(even)')

  console.log(liOdd);

  for (let i = 0; i < items.length; i++) {
      liOdd[i].style.background='green'
      liEven[i].style.background='gray'
      
  }
  