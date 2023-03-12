import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div>
      <span>{currentUser?.username}</span>
      {currentUser?.roles === "admin"? (
        <Link to="/users">Użytkownicy</Link>
      ):null
      
      }
      {currentUser ? (
        <span onClick={logout}>Logout</span>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Navbar;
