import React, { Component } from 'react'

class ChildCustomer extends Component{
    render()
    {
        return(
            <div style={{border:"1px solid black"}}>
                <h1>{this.props.data}</h1>
                <h1> child component</h1>
            </div>
        )
         
    }
}
export default ChildCustomer