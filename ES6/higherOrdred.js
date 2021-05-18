//higher ordred function

// const ages=[33,12,20,16,40,50]

//with simple loop
// for (let index = 0; index < ages.length; index++) {
//    console.log(ages[index]);
    
// }
//with foreach

// ages.forEach( function(age,index){
//     console.log(age,index);
// } )

//with map loop

// const res=ages.map(function(age,index){
//     return age
// })

// with shourt hand

// const res=ages.map((age)=>age*2)


// console.log(res);


/////////////////filter 

//check if ages >20
// for (let index = 0; index < ages.length; index++) {

//     if(ages[index]>20)
//     // console.log(ages[index]);
    
// }

// const res=ages.filter((age)=>{
//       return age>20
// })

//with shourt hand
// const res=ages.filter((age)=>age>20)
// console.log(res);

///////////// sort
const ages=[12,16,20,33,40,50,100,200,400]
            


// const res=ages.sort((a,b)=>{
//     return b-a
// })

// with shourt hand
// const res=ages.sort((a,b)=>b-a)

// console.log(res);

//// reduce

// const res=ages.reduce((total,age)=>{
//     return total+age
// },0)

//with shourt hand
const res =ages.reduce((total,age)=>total+age,0)

console.log(res);