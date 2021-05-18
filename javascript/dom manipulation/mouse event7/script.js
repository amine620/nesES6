// // document.querySelector('a').addEventListener('click',onClick)
// // function onClick(e){
// //     console.log("clicked!!")
// //     e.preventDefault();
// // }

// document.querySelector('a').addEventListener('click',function(e){
   
//     e.preventDefault();
//     let val
//     val=e.target
//     val=e.target.id
//     val=e.target.className
//     val=e.target.classList
//     val=e.target.classList[0]
//     //event type
//     val=e.type
//     //timestamp
//     val=e.timeStamp
//     //coords event relative to window
//     val=e.clientY
//     val=e.clientX
//     //coords event relative to element
//     val=e.offsetX
//     val=e.offsetY

//     console.log(val);
// })

const btn1=document.getElementById('btn1')

btn1.addEventListener('click',function(){
    let ul=document.createElement('ul')

    for (let i = 1; i <= 10; i++) {
        let li1=document.createElement('li')
        li1.appendChild(document.createTextNode('text'+i))
        ul.appendChild(li1)
    }


    document.body.appendChild(ul)
    console.log(ul);
})


const btn2=document.getElementById('btn2')
btn2.addEventListener('click',function(){
     let div=document.createElement('div')

     for (let i = 1; i <=3; i++){
         let heading=document.createElement('h1')
         heading.appendChild(document.createTextNode('text'+i))
         div.appendChild(heading)
        
     }
     document.body.appendChild(div)
})


const btn3=document.getElementById('btn3')

btn3.addEventListener('click',function(){
    if(document.querySelector('ul') && document.querySelector('div'))
    {

        document.querySelector('ul').style.color='red'
        document.querySelector('div').style.color='red'
    }
    else{
        alert('element not created yet')
    }
})


const btn4=document.getElementById('btn4')
btn4.addEventListener('click',function(){
    document.querySelector('ul').remove()
    document.querySelector('div').remove()
})
