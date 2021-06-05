import DataCenter from "./components/API/DataCenter";
import Users from "./components/users/Users";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar";
import Form from "./components/users/Form";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Details from "./components/users/details";
import Update from "./components/users/Update";

function App() {


  return (

    <div className="App">
     <DataCenter>

        <Router>
       <Navbar/>
          <Switch>
            <Route exact path='/' component={Users}/>
            <Route exact path='/add' component={Form}/>
            <Route exact path='/details/:id' component={Details}/>
            <Route exact path='/update/:id' component={Update}/>
          </Switch>
        </Router>

     </DataCenter>
    </div>
  );
}

export default App;
