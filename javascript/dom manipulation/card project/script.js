let items=document.querySelectorAll('.panel')

for (let i = 0; i < items.length; i++) {
   items[i].addEventListener('click',function(){
       removeActive()
       items[i].classList.add('active')
   })
    
}
function removeActive(){
    for (let i = 0; i < items.length; i++) {

        if(items[i].classList.contains('active'))
        {
            items[i].classList.remove('active')
        }
        
    }
}