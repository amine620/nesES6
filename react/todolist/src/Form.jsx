import React, { Component } from 'react';

class Form extends Component {





    state={
       
    }
   

    render() {

      const  handleChange=(e)=>
      {
         this.setState({
            [e.target.name]:e.target.value
         })
     
      }

  
     


      return (
          
          <div>
                <input name='user1' onChange={handleChange} type='text' />
                <input name='user2' onChange={handleChange} type='text' />
                <input name='user3' onChange={handleChange} type='text' />
               
               <h1>{this.state.user1}</h1>
               <h1>{this.state.user2}</h1>
               <h1>{this.state.user3}</h1>
            </div>
        );
    }
}

export default Form;
