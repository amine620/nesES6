

////CREATE BOOTSTRRAP LIST ITEMS

// create ul
const ul=document.createElement('ul')

ul.className='list-group'

//create li
for (let i = 0; i < 4; i++) {   
  const li=document.createElement('li')
    li.className='list-group-item'
    
    //add text inside li
    li.appendChild(document.createTextNode('Cras justo odio'))
    

    //append li inside ul
    ul.appendChild(li)
}


//append ul inside body
document.body.appendChild(ul)
// add active class to first li
document.querySelectorAll('li')[0].classList.add('active')