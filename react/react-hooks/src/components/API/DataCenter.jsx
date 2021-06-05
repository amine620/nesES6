import React, { createContext, useState } from 'react';


//step 1
export const context=createContext()

const DataCenter = (props) => {
    const message='Hi i am comming from data center 1'
    const message2='Hi i am comming from data center 2'
    const message3='Hi i am comming from data center 3'

    
  const [users, setusers] = useState([
    {
      id:1,
      name: "amine",
      email: "amine@gmail.com",
      phone: "12345679",
    },
    {
      id:2,
      name: "mourid",
      email: "mourid@gmail.com",
      phone: "11111111",
    },
    {
      id:3,
      name: "john doe",
      email: "john@gmail.com",
      phone: "12345679",
    },


  ]);

  const deleteUser=(id)=>{      
    const res=users.filter((user)=>user.id!=id)
      setusers(res)
   }
  
   const add=(user)=>{
      const newUser={
        id:users.length+1,
        name:user.name,
        phone:user.phone,
        email:user.email
      }
      setusers([newUser,...users])
   }
 

    function show(){
        alert('Hi')
    }
    return (
        <div>
            {/* step 2 */}
            <context.Provider value={{
              message,
              message2,
              message3,
              users,
              show,
              deleteUser,
              add
              }}>

                {/* step 3 */}
                {props.children}

            </context.Provider>
            
        </div>
    );
}

export default DataCenter;
