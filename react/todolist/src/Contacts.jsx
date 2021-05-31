import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {

    state={
        number:0,
        users:[]

    }
    

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((data)=>data.json())
        .then((data)=>this.setState({users:data}))
        console.log('component did mount');
    }

    componentDidUpdate()
    {
        console.log('component did updated ');
    }

    

    render() {
        console.log('render');


        const increment=()=>{
            this.setState({
                number:this.state.number+1
            })
        }
        return (
            <div>
                
                <h1>{this.state.number}</h1>

                <button onClick={increment}>increment</button>

                {
                    this.state.users.map(user=>(

                       <Contact data={user}/>
                        
                    ))
                }
            </div>
        );
    }
}

export default Contacts;
