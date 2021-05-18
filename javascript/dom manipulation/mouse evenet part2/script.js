const card=document.querySelector('.card')
const title=document.querySelector('.title')
const btn=document.querySelector('button')
const heading=document.querySelector('h1')
const heading2=document.querySelector('h2')
// //doubleClick
// btn.addEventListener('dblclick',myEvent)

// //MouseDown
// btn.addEventListener('mousedown',myEvent)

// //MouseUp
// btn.addEventListener('mouseup',myEvent)

// mouse enter
card.addEventListener('mouseenter',myEvent)
// mouse leave
card.addEventListener('mouseleave',myEvent)

//mouse over
// card.addEventListener('mouseover',myEvent)
//mouse out
// card.addEventListener('mouseout',myEvent)

//mouse move

card.addEventListener('mousemove',myEvent)

function myEvent(e){
   console.log('this is : '+e.type);

   heading.textContent='MouseX : '+e.offsetX+' offsetY : '+e.offsetY


   card.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},40)`

       heading2.style.top=`${e.offsetY}px`
       heading2.style.left=`${e.offsetX}px`
    
 
    

}