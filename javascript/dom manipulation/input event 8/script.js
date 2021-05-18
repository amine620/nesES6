const taskInput=document.getElementById('task')

//keydown
// taskInput.addEventListener('keydown',myEevent)
//keyup
// taskInput.addEventListener('keyup',myEevent)
//keypress
// taskInput.addEventListener('keypress',myEevent)
//focus
// taskInput.addEventListener('focus',myEevent)

//blur
taskInput.addEventListener('blur',myEevent)
taskInput.addEventListener('focus',myEeventFocus)

//cut
// taskInput.addEventListener('cut',myEevent)

//past
// taskInput.addEventListener('paste',myEevent)

//change
// taskInput.addEventListener('change',myEevent)

function myEevent(e){
   if(e.target.value=='')
   {
       taskInput.style.borderColor='red'
       taskInput.className='shake'
   }
}
function myEeventFocus(e){
     taskInput.style.borderColor='initial'
     taskInput.classList.remove('shake')

}