import React, { useContext } from "react";
import { useState } from "react";
import API from "../services/api.js";
import { AuthContext } from "../context/authContext.js";
// import {useLocation} from "react-router-dom"



const RolesEditor = ({ roles, id }) => {
const { currentUser } = useContext(AuthContext); 
console.log(currentUser.roles)
  const [role, setRole] = useState(roles);

  const handleSave = async (e) => {
    e.preventDefault();
    if(currentUser.roles !==  "admin" && currentUser.roles !== "moderator") return console.log("Not authorized!")
    try {
      await API.put(`/users/${id}`, { roles: role });
      await API.get("/users")
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div role="group" aria-labelledby="checked">
      <input
        type="radio"
        id="default"
        value="default"
        name={`roles${id}`}
        checked={role === "default"}
        onChange={(e) => setRole(e.target.value)}
      />{" "}
      Default
      <input
        type="radio"
        id="moderator"
        value="moderator"
        name={`roles${id}`}
        checked={role === "moderator"}
        onChange={(e) => setRole(e.target.value)}
      />{" "}
      Moderator
      <input
        type="radio"
        id="author"
        value="author"
        name={`roles${id}`}
        checked={role === "author"}
        onChange={(e) => setRole(e.target.value)}
      />{" "}
      Autor
      <button onClick={handleSave}>Zapisz</button>
     
    </div>
  );
};

export default RolesEditor;
