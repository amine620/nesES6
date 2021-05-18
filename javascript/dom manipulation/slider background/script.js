
const div_slider=document.querySelectorAll('.slide-div')
const left_button=document.querySelector('#left')
const right_button=document.querySelector('#right')

let isActive=0
right_button.addEventListener('click',function(){
    isActive++
    if(isActive>div_slider.length-1)
    {
        isActive=0
    }
    
    removeActiveClass()
     div_slider[isActive].classList.add('active')
     document.body.style.backgroundImage=div_slider[isActive].style.backgroundImage
    
})

left_button.addEventListener('click',function(){
    isActive--
    if(isActive<0)
    {
        isActive=div_slider.length-1
    }
    
    removeActiveClass()
     div_slider[isActive].classList.add('active')
     document.body.style.backgroundImage=div_slider[isActive].style.backgroundImage

})

function removeActiveClass() {
    for (let i = 0; i < div_slider.length; i++) {
        
     div_slider[i].classList.remove('active')
        
    }
}


//////////auto animation

setInterval(() => {
    isActive++
    if(isActive>div_slider.length-1)
    {
        isActive=0
    }
    
    removeActiveClass()
     div_slider[isActive].classList.add('active')
     document.body.style.backgroundImage=div_slider[isActive].style.backgroundImage
}, 2000);