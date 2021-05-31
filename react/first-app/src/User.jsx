import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div style={{border:"1px solid black"}}>
                <h1>{this.props.data}</h1>
              <h1>user component</h1> 


          {
          this.props.listUsers.map((user)=>(

            <ul>
                <li>name : {user.name} </li>
                <li>email : {user.email} </li>
            </ul> 

          ))
          }

          
            </div>

        )
    }
}
