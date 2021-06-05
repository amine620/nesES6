import React, { useContext, useState } from 'react';
import { context } from '../API/DataCenter';

const Form = (props) => {

const {add}=useContext(context)

    const [user,setuser]=useState({
        name:'',
        email:'',
        phone:'',
    })

    
    const handleChange=(e)=>{
        setuser({
            ...user,
          [e.target.name]:e.target.value  
        })
    }
  
    return (
        <div className="form-group col-md-6">
      <input className=' form-control mt-2' onChange={handleChange} type="text" placeholder='name' name='name' />
      <input className=' form-control mt-2' onChange={handleChange} type="text" placeholder="email" name='email' />
      <input className=' form-control mt-2' onChange={handleChange} type="text" placeholder="phone" name='phone' />
      <button onClick={()=>add(user)} className='btn btn-secondary form-control mt-2'>add</button>
       </div>
    );
}

export default Form;
