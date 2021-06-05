import React, { useContext } from 'react';
import { context } from '../API/DataCenter';

const Details = (props) => {
    const {users}=useContext(context)
    const id=props.match.params.id
    return (
        <div className="container mt-5">
            <h1 className="text-secondary text-center">details</h1>
            {
            users.filter((user)=>user.id==id)
            .map((user)=>(
            <ul className="list-group col-md-8">
                <li className="list-group-item active">userID :{user.id} </li>
                <li className="list-group-item"><strong>name : {user.name} </strong></li>
                <li className="list-group-item"><strong>email : {user.email} </strong></li>
                <li className="list-group-item"><strong>phone : {user.phone} </strong></li>
            </ul>
            ))
            }
        </div>
    );
}

export default Details;
