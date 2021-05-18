

// // setTimeOut
// setTimeout(() => {
//       document.querySelector('h1').innerHTML='start loading....'
// }, 2000);
// setTimeout(() => {
//     document.querySelector('h1').innerHTML='wait few seconds....'
// }, 5000);
// setTimeout(() => {
//     document.querySelector('h1').innerHTML='your data is ready to send....'
// }, 7000);

// //setInterval

// let i=0
// const increment=setInterval(() => {
//     console.log(i++);
// },1000);


// function sayHi(callback)
// {
//     setTimeout(() => {   //1
//         console.log('Hi');
//         callback()
//     }, 4000);
// }

// function sayHello()
// {
//     setTimeout(() => {  //3
//         console.log('hello');
       
//     }, 2000);
// }

// function saygoodBey(callback)
// {
//     setTimeout(() => {     //2
//         console.log('good bey');
//         callback()
//     }, 3000);
// }







// function message1() {
//       alert('message1')
//       //get data from firebase
// }

// function message2() {
//     alert('message2')
//     //display data in html
// }

// message1()
// message2()




// function return promise

// fetch("https://jsonplaceholder.typicode.com/users")

// .then(function(data){
//    return data.json()
// })
// .then(function(data){
//       console.log(data);
// })




//function with hell callback

// sayHi(function(){
//     sayHello(function(){
//         sayExempl(function(){

//         })
//     })
// })