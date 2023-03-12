import React, { useEffect, useContext, useState } from "react";
import User from "../componentsTest/User";
import { AuthContext } from "../context/authContext";
import API from "../services/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { currentUser } = useContext(AuthContext);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/users");
      setUsers(res.data);
      console.log("Data fetching");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id, userRoles) => {
    console.log(currentUser.roles)
    if (currentUser.roles !== "admin" && currentUser.roles !== "moderator")
    
      return console.log("Not authorized!");
      if(userRoles === "admin") return console.log("Can not delete 'admin'!")
    try {
      await API.delete(`/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Users Page</h1>
      <span>{process.env.API_HOST}</span>
      {users.map((user) => (
        <div key={user.id}>
          <User user={user} />
          <button onClick={() => handleDelete(user.id, user.roles)} disabled={user.roles === "admin"} >Usuń</button>
        </div>
      ))}
    </div>
  );
};

export default Users;
