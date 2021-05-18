
///EVENT BUBLING

// document.querySelector('h1').addEventListener('click',function(){
//     console.log('i am h1');
// })




// document.querySelector('.title').addEventListener('click',function(){
//     console.log('i am title div');
// })

// document.querySelector('.card').addEventListener('click',function(){
//     console.log('i am card div');
// })

// document.querySelector('.container').addEventListener('click',function(){
//     console.log('i am container div');
// })

// document.querySelector('h2').addEventListener('click',function(){
//     console.log('i am h2');
// })

//EVENT DELEGATION



//with clasic method
const list=document.querySelectorAll('li')

// for (let i = 0; i < list.length; i++) {

//     list[i].addEventListener('click',function(e){
//         console.log(e.target.innerText);
//     })
    
// }

//with event delegation
document.querySelector('.container').addEventListener('click',function(e){
    if(e.target.classList.contains('list-item'))
    {
        console.log(e.target.innerText);
    }
})

/////////////////TODOLIST PART 1/////////////////////

const input=document.getElementById('input')
const button=document.getElementById('button')
const ul=document.querySelector('ul:last-child')


function addNewTask(){


button.addEventListener('click',function(){

    // create li with class and text comming from input
    let li=document.createElement('li')
    li.className='list-group-item'
    //appen text to li
    li.appendChild(document.createTextNode(input.value))
  
     //create i (icon) and add class and aria-hidden attributes
    let i=document.createElement('i')
    i.setAttribute('class','fa fa-trash float-right  text-warning delete-icon')
    i.setAttribute('aria-hidden','true')
    //append i to li
    li.appendChild(i)


    // and finally verify if input is not empty and append li to ul
   
   
       //delete spaces
    let res=input.value.trim()
    
    if(input.value=='' || res.length==0)
    {
        alert('you should add some data')
    }
    else{
        ul.appendChild(li)

          // pass Data to function 
          addToLocalStorage(res)
    }
    //clear input
    input.value=''

  

})
}
addNewTask()

/// delete Task


function DeleteTask(){
    ul.addEventListener('click',function(e){
         if(e.target.classList.contains('delete-icon'))
         {
             if(confirm('do you want to delete this item?'))
             {
                 e.target.parentElement.remove()
                 deleteFromLocalStorage(e.target.parentElement.innerText)
             }
         }
    })
}

DeleteTask()

// declare empty table 
var tasks=[]

function addToLocalStorage(task){
  

    if(localStorage.getItem('task')!=null)
    {
        tasks=JSON.parse(localStorage.getItem('task'))
    }
   
    tasks.push(task)
   localStorage.setItem('task',JSON.stringify(tasks))

}

//get Data
function getDataFromLocalStorage()
{
    if(localStorage.getItem('task')!=null)
    {
        tasks=JSON.parse(localStorage.getItem('task'))
    
        for (let index = 0; index < tasks.length; index++) {
            
              // create li with class and text comming from input
        let li=document.createElement('li')
        li.className='list-group-item'
        //appen text to li
        li.appendChild(document.createTextNode(tasks[index]))
      
         //create i (icon) and add class and aria-hidden attributes
        let i=document.createElement('i')
        i.setAttribute('class','fa fa-trash float-right  text-danger delete-icon mr-2')
        i.setAttribute('aria-hidden','true')
        //append i to li
        li.appendChild(i)


        let i2=document.createElement('i')
        i2.setAttribute('class','fa fa-edit float-right  text-warning delete-icon mr-2')
        i2.setAttribute('aria-hidden','true')
        //append i to li
        li.appendChild(i2)


        // create 
    
        ul.appendChild(li)
    
        }

    }
}
getDataFromLocalStorage()


//delete from localStorage
function deleteFromLocalStorage(text)
{
    console.log(text);
    let index=tasks.indexOf(text)
    tasks.splice(index,1)
    localStorage.setItem('task',JSON.stringify(tasks))
    console.log(index);
}

//search function
function searchItem()
{
    const li=document.querySelectorAll('ul:last-child li')

    document.getElementById('search').addEventListener('keyup',function(e){

        let input=e.target.value.toLowerCase()
          
        for (let i = 0; i < li.length; i++) {

         var liText= li[i].innerText.toLowerCase()

           if(liText.indexOf(input)!=-1)
           {
               li[i].style.display='block'
           }
           else{
               li[i].style.display='none'
           }
            
        }

    })
}
searchItem()


document.querySelector('ul:last-child').addEventListener('click',function(e){
    var div=   document.querySelector('#list-edit')
                  var direction=e.target.getBoundingClientRect()
                  console.log(direction);
               div.style.position='absolute'
               div.style.top=direction.top+'px'
            //    div.style.bottom=direction.bottom+'px'
            //    div.style.left=direction.left+'px'
            //    div.style.right=direction.right+'px'
               div.style.width=direction.width+'px'
               div.style.height=direction.height+'px'
})