// create object with id name email

const user={
    id:1,
    name:"amine",
    email:"amine@gmail.com"
}

//create table of objects with id name email

const users =[
    {
        id:1,
        name:"amine",
        email:'amine@gmail.com'
    },
    {
        id:2,
        name:"mourid",
        email:'mourid@gmail.com'
    }
]
// use destruct method and destruct name email of first element
const {name,email}=users[0]

// use spread operator to merge 2 tables of object (create the table)
const table1=[
   {
    id:1,
    name:'john doe'
   },
   {
       id:2,
       name:'lorem ipsum'
   }
]
const table2=[
    {
        id:1,
        name:'exemple 1'
    },
    {
        id:2,
        name:'exemple 2'
    }
]
const table3=[...table1,...table2]
// use arrow function to display name and id of first object

// const show=()=>{
//      console.log(user.id,user.name);
// }
// show()
// use arrow function with shourt hand
const show=()=> console.log(user.id,user.name);

show()

//////
const numbers=[22,3,4,11,10,2,2]

//use map and display all data

// const res=numbers.map((number)=>{
//        return number
// })
// console.log(res);
// use foreach and display just the number > 10
// numbers.forEach((number)=>{
//     if(number>10)
//     {
//         console.log(number);
//     }
// })
// use map and foreach in shourt hannd
// const res=numbers.map((number)=>number)
// console.log(res);
numbers.forEach(number=> number>10 ? console.log(number) : "")
// use  filter to filter the numbers < 10
 const res=numbers.filter(number=>number <10)
//  console.log(res);
// use reduce to reduce all numbers

let sum=0

for (let i = 0; i < numbers.length; i++) {
   sum=sum+numbers[i] 
}
console.log(sum);


// const total=numbers.reduce( (total,number)=>{
//     return total+number
// }  , 0  )


const total=numbers.reduce( (total,number)=>  total+number , 0  )
console.log(total);
