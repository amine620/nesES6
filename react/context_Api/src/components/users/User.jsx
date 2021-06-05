import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../API/DataCenter';

const User = (props) => {
    const {deleteUser}=useContext(context)
    return (
   
           <ul className="list-group col-md-4 ">
               <li className="list-group-item active">{props.data.id}</li>
               <li className="list-group-item">{props.data.name}</li>
               <li className="list-group-item">{props.data.email}</li>
               <li className="list-group-item">{props.data.phone}</li>
               <li className="list-group-item">
                   <button onClick={()=>deleteUser(props.data.id)} className="btn btn-danger">delete</button>
               </li>
               <li className="list-group-item">
                   <Link className='btn btn-primary' to={'/details/'+props.data.id}>details</Link>
               </li>
               <li className="list-group-item">
                   <Link className='btn btn-warning' to={'/update/'+props.data.id}>update</Link>
               </li>
          </ul> 
       
    );
}

export default User;
