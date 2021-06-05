import React, { useContext, useState } from "react";
import { context } from "../API/DataCenter";
import Form from "./Form";
import User from "./User";

const Users = (props) => {

const {users}=useContext(context)


  return (
    <div className='container'>
      <h1 className='text-primary text-center'>Users tracker</h1>

      <div className="row mt-5">

       <Form/>      
     
     <div className="col-md-5 card">
       {
       users.map((user)=>(
              <User data={user}/>
       ))}
     </div>

     </div>
    </div>
  );
};

export default Users;
