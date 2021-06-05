import React, { useContext } from 'react';
import { context } from '../API/DataCenter';

const User = (props) => {
  const {deleteUser}=useContext(context)
    return (
    <ul className='list-group'>
        <li className='list-group-item'>{props.data.name}</li>
        <li className='list-group-item'>{props.data.email}</li>
        <li className='list-group-item'>{props.data.phone}</li>
        <li className='list-group-item'>
          <button className='btn btn-danger' onClick={()=>deleteUser(props.data.id)}>delete</button>
        </li>
    </ul>
    );
}

export default User;
