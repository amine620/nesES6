const left=document.querySelector('.left')
const right=document.querySelector('.right')

const container=document.querySelector('.container')

left.addEventListener('mouseenter',function(){
    container.classList.add('in-hover-left')
})
left.addEventListener('mouseleave',function(){
    container.classList.remove('in-hover-left')
})


right.addEventListener('mouseenter',function(){
    container.classList.add('in-hover-right')
})
right.addEventListener('mouseleave',function(){
    container.classList.remove('in-hover-right')
})