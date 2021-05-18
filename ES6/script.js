// objects



const user={
    name:'amine',
    email:'amine@gmail.com',
    phone:"321321321321"
}

delete user
// console.log(user);







//table of objects
const users=[
    {
        id:1,
        name:'amine',
        age:"25"
    },
    {
        id:2,
        name:'amine',
        age:"25"
    },
    {
        id:3,
        name:'amine',
        age:"25"
    },
]

console.log(users[1].name);
console.log(users[1].age);

//distruction

// const {name,email,phone}=user

// console.log(name,email,phone);


//table of objects destruction

// const {id,name,age}=users[0]
// console.log(id,name,age);

//multiple destruction

const customer={
    id:1,
    name:'john doe',
    adresse:{
        zipCode:123,
        street:"12 DB exemple",
        area:{
            areaNumber:'11'
        }
    }
}


const {name,adresse:{street}}=customer

console.log(name,street);

const {adresse:{area:{areaNumber}}}=customer

console.log(areaNumber);


// spread operator


//simple table
const ages=[22,11,12,10,33,12,24]
const floats=[22.1,11.4,33.33,20.3]
// const res=ages.concat(floats)

const res=[...ages,...floats]
// console.log(res);

//ternary operator

const status=false;

 status ? console.log('is true'): console.log('is false');

 //try and catch (error handling)

function getData()
{
    
}
 try {

   getData()
  console.log('i am inside try ');

 } catch (error) {

     console.error(error);
 }


console.log('API DATA',users);


//anonymos function

const sayGoodBey=function()
{
    console.log('good bey');
}
//arrow function

const sayHello=()=>{
    console.log('hello');
}
// in one line

const sayHi=()=>console.log('Hi');

sayHello();
sayHi();
sayGoodBey();

//immediately invoked function expression

(()=>{
    console.log('hello ES6');
})();

(function(){
    console.log('hello ES6');

})();

// REST OPERATOR

const numbers=(...num)=>{
    console.log(num);
}

numbers(1,2,3,1,2,4)





 



