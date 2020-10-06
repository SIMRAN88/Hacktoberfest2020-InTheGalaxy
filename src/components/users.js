import React from "react"
import userList from '../configuration/userconfig.json';
import './users.css';
import gradients from './gradients';
const  Users = ()=>{
      
    return (
        <div className="card">
        <h4>Passengers OnBoard</h4>
          <div className="list-group">
            {userList.map((userList) => {
              return (
            <h6 className="list-group-item">{userList.name}</h6>
              );
            })}  
          </div>
          </div>
      );
}
export default Users;