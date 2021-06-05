import React, { useContext } from 'react';
import { context } from '../API/DataCenter';
import User from './User';

const Users = () => {
    const {users}=useContext(context)
    return (
        <div className='container mt-5'>
            <div className="row">
            {
                users.map(user=>(
                    <User data={user} />
                ))
            }
            </div>
        </div>
    );
}

export default Users;
