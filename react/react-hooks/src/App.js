import Users from './components/users/Users';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/users/Navbar';
import { useState } from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import DataCenter from './components/API/DataCenter';

function App() {


  return (

    <div className="App">

  <DataCenter>
   <Router>
         <Navbar />
     <Switch>
       <Route exact path='/' component={Home} />
       <Route exact path='/About' component={About} />
       <Route exact path='/Contact' component={Contact} />
       <Route exact path='/users' component={Users} />
     </Switch>
   </Router> 
  </DataCenter>

    </div>
  );
}

export default App;
