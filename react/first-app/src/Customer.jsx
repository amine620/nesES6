import React, { Component } from 'react'
import ChildCustomer from './ChildCustomer'

class Customer extends Component {
    render() {
        const message='i am message from customer component'
        return (
            <div style={{border:"1px solid black"}}>
                <h1>{this.props.data}</h1>
                <h1>customer cumponent</h1>
                {
                    this.props.listCustomers.map((customer)=>(
                      <ul>
                          <li>name : {customer.name}</li>
                          <li>price : {customer.price}</li>
                      </ul>
                    ))
                }
                <ChildCustomer data={message}/>
            </div>
        )
    }
}
export default Customer
