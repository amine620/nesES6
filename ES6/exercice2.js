const UdemyCourses=[
    {
        name:'learn react from scratch',
        price:30, //dollar
        category:'IT & technology',
        creator:'MAX MILIAN SHWARZMOLLER',
        rate:4.5,
        date:'12/12/2020',
        hours:10

    },
    {
        name:'javascript fundamentals before learning react',
        price:12, //dollar
        category:'IT & technology',
        creator:'BRAD TRAVERSY',
        rate:4.5,
        date:'05/05/2020',
        hours:20


    },

    {
        name:'nodejs from 0 to hero',
        price:15, //dollar
        category:'IT & technology',
        creator:'DEV ED',
        rate:4.5,
        date:'09/05/2020',
        hours:40


    },
    {
        name:'MERN STACK FOR ADVANCED',
        price:12, //dollar
        category:'IT & technology',
        creator:'BRAD traversy',
        rate:4.5,
        date:'05/22/2020',
        hours:50

    },
    {
        name:'LEARN ANGULAR 10 WITH FIREBASE',
        price:18, //dollar
        category:'IT & technology',
        creator:'YOHA DOE',
        rate:4,
        date:'06/06/2019',
        hours:35


    },
    {
        name:'LARAVEL 8 LAST UPDATE',
        price:18, //dollar
        category:'IT & technology',
        creator:'THE NET NINJA',
        rate:4,
        date:'08/06/2016',
        hours:30


    },
    {
        name:'LEARN REACT CONTEXT API & REDUX ',
        price:19, //dollar
        category:'IT & technology',
        creator:'THE NET NINJA',
        rate:4.5,
        date:'01/01/2017',
        hours:20


    },

    {
        name:'LEARN PYTHON & MACHIN LEARNING',
        price:35, //dollar
        category:'IT & technology',
        creator:'STIFAN ARDWELL',
        rate:4.5,
        date:'05/07/2017',
        hours:120


    },
    {
        name:'LEARN C# ENTITY FRAMEWORK & FLUENT API',
        price:30, //dollar
        category:'IT & technology',
        creator:'MOSH HAMADANI',
        rate:4.5,
        date:'05/22/2018',
        hours:15


    },
    {
        name:'LEARN C# ENTITY FRAMEWORK & ASP.NET CORE',
        price:30, //dollar
        category:'IT & technology',
        creator:'MOSH HAMADANI',
        rate:4.5,
        date:'05/19/2019',
        hours:15


    },

    {
        name:'LEARN C# & ADO.NET WINDOWS FORM',
        price:10, //dollar
        category:'IT & technology',
        creator:'MOSH HAMADANI',
        rate:4.5,
        date:'05/19/2015',
        hours:15


    },
    {
        name:'LEARN C# & ADO.NET WINDOWS FORM',
        price:11, //dollar
        category:'IT & technology',
        creator:'MOSH HAMADANI',
        rate:4.7,
        date:'05/19/2015',
        hours:15


    }

]

//1 display all courses


const allCourses=UdemyCourses.map((course)=>{
    return course
})
// console.log(allCourses);



//2 display just the names and price of courses


const NamesPrices=UdemyCourses.map((course)=>{
    return `name : ${course.name} -- price :  ${course.price}`
})
// console.log(NamesPrices);





// 3 display the courses of brad traversy


// const bradCourses=UdemyCourses.filter((course)=>{
//       return course.creator=="BRAD TRAVERSY"
// })
// console.log(bradCourses);


const res=UdemyCourses.filter((course)=>{
    return course.creator.toLowerCase() == "Brad TRAVERSY".toLowerCase();
    })
// console.log(res);



// 4 display the top rate courses

//add rates in new table
const rates=UdemyCourses.map(course=>course.rate)
// find max number from new table
const max=Math.max(...rates)

// use max varibale to find top rating cours
const topRate=UdemyCourses.filter((course)=>{
    return course.rate>=max
})
console.log(topRate);




// 5 display the courses who has more than 15 hours


const longCourses=UdemyCourses.filter(course=>course.hours>15)
// console.log(longCourses);




// 6 display reactjs courses


let name='REACTJS'
const reactCourses=UdemyCourses.filter((course)=>{
    return course.name.toLocaleLowerCase().includes(name.substring(0,5).toLocaleLowerCase())
    })

// console.log(reactCourses);



// 8 display c# courses

const c_charp_courses=UdemyCourses.filter(course=>{
    return course.name.toLocaleLowerCase().includes('c#')
})
console.log(c_charp_courses);





//9 display the name && creator of the courses who have  less than 20 dollar

const filter_course=UdemyCourses
.filter(course=>course.price<20)
.map(course=>`name : ${course.name} creator : ${course.creator}`)

// console.log(filter_course);



//10 display the sum of all prices

const total_prices=UdemyCourses.reduce( (total,course)=>{
    return total+course.price
} ,  0 )

// console.log(total_prices+"$");






//11 sort the courses from the cheaper to  expensive


const sortCourses=UdemyCourses.sort((a,b)=>{
    return a.price-b.price
})

// console.log(sortCourses);

//12  display the name from the latest courses 


const latest=UdemyCourses.sort((a,b)=>{
            return new Date(b.date) - new Date(a.date)
})

console.log(latest);



// const res=UdemyCourses.sort((a,b)=>{return new Date(a.date) - new Date(b.date)})


// console.log(res);




