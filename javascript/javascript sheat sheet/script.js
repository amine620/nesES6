// ///////////// var 
// var name='my first name';
// name='new name update'

// var name='second name'
// // console.log(name);

// ///// const 

// // const age=25
// // age=20 // we cant overrid new value to const variable
// // const age=30 // we cant declare new variable with the same name of previous variable

// // console.log(age);

// /// let (for the next module)

// ///////////////// variable declaration
// // letters,numbers,_,$
// // can not start with number

// var first_name='kall halden'
// var name='max milian'
// var firstName='brad travery'
// var FirstName='mosh hamadani'
// var FIRSTNAME='dev Ed'

// ///////////////// PRIMITIVE TYPE//////
// var message='bonjour'
// ////// string
 
// var age=30
// ///number
// var login=true
// //boolean

// var data=null
// //null

// var data2={
//     name:'amine',
//     age:25
// }
// //object

// var title=undefined
// //undifined
// // console.log(typeof title)

// /////////////////REFERENCES TYPE
// const table1=['name','name tow','name three',12,true,null]

// table1[1]='updated name tow'


// //object structur


// const user={
//     id:1,
//     name:'amine',
//     age:25
// }

// //objects table
// const users=[
//     {
//         id:1,
//         name:'amine',
//         age:25,
//         address:{
//            street:"db 1 rue alhbous",
          
//         }
//     },
//     {
//         id:2,
//         name:"name 2",
//         age:30,
//         address:{
//             street:"db 2 rue alhbous"

//         }
//     },
//     {
//         id:3,
//         name:'name 3',
//         age:22,
//         address:{
//             street:"db 2 rue alfida"
//         }
//     },
// ]
// for (let index = 0; index < users.length; index++) {
    
//     // console.log(users[index].name);
// }

// //////////////// date and time

// var date=new Date("2021-4-11")
// // console.log(date.getDate());



// ///////////// type conversion
// //// to string
// var age=String(33) 
// var sum=(100+1).toString()
// var table=String([1,22,4,5]) 
// /// to number
// // var N=parseInt(prompt('give me number')) 

// // var N2=parseFloat(prompt('give me number'))
// // console.log(N2);

// ////////////// math object

// /// manual way
// var val
// const number1=22
// const number2=20
// val=number1+number2
// val=number1*number2
// val=number1/number2
// val=number1-number2

// //with math object

// val=Math.PI
// val=Math.sqrt(4)
// val=Math.pow(3,3)
// val=Math.min(22,12,44,2,1)
// val=Math.max(22,12,44,2,1)
// val=Math.floor(3.9)
// val=Math.floor(Math.random()*5) 

// // console.log(val);

// /////////////concatination

// var message1='bonjour'
// var message2='tout le MONDE'

// //append
// // message1+=message2
// //concat
// // var result=message1+' '+message2
// //concat with function
// // result=message1.concat(message2)
// // console.log(result);


// /////////uppercase lowercase

// var result
// result=message1.toUpperCase();
// result=message2.toLowerCase()
// // lenght
// result=message1.length
// ////indexOf
// var lastName='mourid amine'
// result=lastName.indexOf('u')
// //char at
// result=lastName.charAt(0)
// //substring
// result=lastName.substring(1,4)
// //split
// result=lastName.split('')
// // console.log(result);
// /////////////////MUTATING ARRAYS
// var numbers=[22,334,21,34,12,32]
// ///// add on to end
// // numbers.push(230)
// // numbers.unshift(99) // add to the begin
// // numbers.pop() // delete last element
// // numbers.shift() //delete first element
// numbers.splice(1,2) // delete element based on some
// // console.log(numbers);

// ///////////////////// IF STATEMENT/////
// var isLogin=false
// // if(isLogin)
// // {
// //     alert('welcome to the dashboard')
// // }
// // else{
// //     alert('login operation was falid ')
// // }

// var age=30
// var name='amine'
// var framework='reactjs 15'

// // if(age==30)
// // {
// //     console.log('your age is 30');
// // }else if(name=='amine')
// // {
// //     console.log('your name is amine')
// // }
// // else if(framework=='reactjs')
// // {
// // console.log(' your framework is reactjs')
// // }
// //////
// // if(age==30)
// // {
// //     console.log('your age is 30');

// // }

// // if(name=='amine'){
// //     console.log('your name is amine')

// // }

// // if(framework=='reactjs'){
// //     console.log(' your framework is reactjs')

// // }
// // logic operator &&

// // if(framework=='reactjs' && age==30)
// // {
// //     console.log('you are hired');
// // }
// // // logic operator ||
// // if(framework=='reactjs' ||  age==30)
// // {
// //     console.log('you are hired');
// // }
// // // spread operator
// // var first_table=[12,243,1,23,1]
// // var second_table=[1,243,1,23,1]
// // var result=[...first_table,...second_table]
// // console.log(result);

// // .......windows object
// let res
// res=window.outerWidth
// res=window.outerHeight
// /// full window
// res=window.innerWidth
// res=window.innerHeight
// //full content


// //scroll points
// res=window.scrollX
// res=window.scrollY
// // console.log(res);

// //location object
// // res=window.location.href='https://www.w3schools.com/php/php_regex.asp'
// // res=window.location.reload()


// // window.history.go(-1)

// // .......................FUNCTIONS

// //first way to create simple function
function sayHi()
{
    console.log('HI');
}
sayHi()

// anonymos function
let anonymos=function()
{
    console.log('anonymos function');
}
anonymos();


// I I F
(function () {
    console.log("test");
})();

//function with params

function showAgeWithName(age,name)
{
    console.log('my age is',age,'and my name is',name);
}

showAgeWithName(25,"amine")

let res=1
function calcPow(number,pow){
   
     for (let cpt = 1; cpt <=pow; cpt++) {
         
       res=res*number
     }
    console.log(res);
}

// calcPow(4,3)

function sum(...number){
     let sum=0
     for (let index = 0; index < number.length; index++) {
         sum=sum+number[index]
         
     }
     return sum
}

console.log(sum(5,5,1,2));


