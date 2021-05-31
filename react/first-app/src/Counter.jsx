import React, { Component } from 'react'

export default class Counter extends Component {
    state={

        number:0

    }
    render() {
     
        
        const increment=()=>{

           this.setState({

               number:this.state.number+1
           })
           console.log(this.state.number);
        }

        const decremenet=()=>{
            
            if(this.state.number>0)
            this.setState({

                number:this.state.number-1
            })
        }

        return (
            <div>
                <h1 className='text-success'>number : {this.state.number}</h1>
                <button onClick={increment}>increment</button>
                <button onClick={decremenet}>decrement</button>
            </div>
        )
    }
}
