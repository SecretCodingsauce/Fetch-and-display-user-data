import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function UserList({userList, updateUserId}) {
    

    
    return (
    
       
    <>
 <div>
      <h1>User List</h1>
      <ul>
        {userList.map(user => (
          <li key={user.id}><NavLink onClick={()=>updateUserId(user.id)} to="user">{user.name}</NavLink></li> 
        ))}
      </ul>
    </div>
        </>
    )
}