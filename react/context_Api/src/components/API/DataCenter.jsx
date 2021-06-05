import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const context=createContext()
const DataCenter = (props) => {
    const [users,setusers]=useState([])

    useEffect(() => {

       axios.get('https://jsonplaceholder.typicode.com/users')

       .then((result)=>{

           console.log(result.data);
           setusers(result.data)
       })
    }, []);


    function deleteUser(id)
    {
        axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
        .then(()=>{
            const res=users.filter(user=>user.id!=id)
            setusers(res)
        })
    }

    function add(user){

        axios.post('https://jsonplaceholder.typicode.com/users/',user)
        .then(res=>{
            setusers([res.data,...users])  
        })
    }

    function update(user){
        axios.put('https://jsonplaceholder.typicode.com/users/'+user.id,user)
        .then((res)=>{
            console.log(res.data);
            setusers(
                
                users.map((oneUser)=>oneUser.id==user.id ? oneUser=user : oneUser)
            )
        })
    }
    return (
        <div>
            <context.Provider value={{users,deleteUser,add,update}} >
              {props.children}
            </context.Provider>
        </div>
    );
}

export default DataCenter;
