const bg=document.querySelector('.bg')
const loadText=document.querySelector('.loading-text')

let load=0

const interval=setInterval(bluring,30)

function bluring(){
    load++
    if(load>99)
    {
       clearInterval(interval)
       console.log(load);
    }
    else{

        loadText.innerText=`${load}%`
        loadText.style.opacity=`${calc(load)}`
        bg.style.filter=`blur(${calcBlur(load)}px)`
    
    }
}



var res

// function scale (number, inMin, inMax, outMin, outMax) {
//     res= (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
//     return res
// }

function calc(load){
    res=(100-load)/100
    return res
}

function calcBlur(load)
{ 
   return  30-(load*(30/100))
}






