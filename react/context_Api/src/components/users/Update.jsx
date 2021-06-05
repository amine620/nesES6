import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { context } from '../API/DataCenter';

const Update = (props) => {

    const {update}=useContext(context)

    const [user,setuser]=useState({})


    const handleChange=(e)=>{
        setuser({
            ...user,
            [e.target.name]:e.target.value
        })
     }


     useEffect(() => {
        const id=props.match.params.id
        axios.get("https://jsonplaceholder.typicode.com/users/"+id)
        .then((res)=>{
            setuser(res.data)
        })
     }, []);

     const sendToDataCenter=()=>{
         update(user)
         props.history.push('/')
     }
    return (
        <div className="form-group col-md-6 offset-3 mt-5">
           <h1 className="text-primary text-warning text-center">update user</h1>
           <input value={user.name} onChange={handleChange} name='name' placeholder="name" type="text" className="form-control mt-2" />
           <input value={user.email} onChange={handleChange} name='email' placeholder="email" type="text" className="form-control mt-2" />
           <input value={user.phone} onChange={handleChange} name='phone' placeholder="phone" type="text" className="form-control mt-2" />
           <button className="btn btn-warning mt-2 form-control" onClick={sendToDataCenter}>save</button>
        </div>
    );
}

export default Update;
