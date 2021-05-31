import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Book from './Book'

import Counter from './Counter'
import Courses from './Courses'
import Customer from './Customer'
import Navbar from './Navbar'
import User from './User'

function App() {

  const message='i am message from app.js'
  const message2='i am message from app component'

  const users=[
    {
      id:1,
      name:"amine",
      email:'amine@gmail.com'
    },
    {
      id:2,
      name:"mourid",
      email:'mourid@gmail.com',
    },
    {
      id:3,
      name:"brad",
      email:'brad@gmail.com'
    }
  ]

  const customers=[
    {
      id:1,
      name:"amine",
      email:'amine@gmail.com'
    },
    {
      id:2,
      name:"mourid",
      email:'mourid@gmail.com',
    },
    {
      id:3,
      name:"brad",
      email:'brad@gmail.com'
    }
  ]
  return (
    <div className="App">

    {/* <User data={message}  listUsers={users}/>
    <Customer data={message2} listCustomers={customers}/> */}

     {/* <Counter/>
     <Book/> */}
     <Navbar/>
     <Courses/>

    </div>
    
  );
}

export default App;
