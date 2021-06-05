import React, { useContext, useState } from 'react';
import { context } from '../API/DataCenter';

const Form = (props) => {

    const {add}=useContext(context)

    const [user,setuser]=useState({})

    const handleChange=(e)=>{
       setuser({
           ...user,
           [e.target.name]:e.target.value
       })
    }

    const sendToDataCenter=()=>{
        add(user)
        props.history.push('/')
    }
    
    return (
       <div className="form-group col-md-6 offset-3 mt-5">
           <h1 className="text-primary text-center">add new user</h1>
           <input onChange={handleChange} name='name' placeholder="name" type="text" className="form-control mt-2" />
           <input onChange={handleChange} name='email' placeholder="email" type="text" className="form-control mt-2" />
           <input onChange={handleChange} name='phone' placeholder="phone" type="text" className="form-control mt-2" />
           <button className="btn btn-primary mt-2 form-control" onClick={sendToDataCenter}>add</button>
        </div>
    );
}

export default Form;
