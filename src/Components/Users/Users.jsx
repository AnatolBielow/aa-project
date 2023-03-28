import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import API from "../../services/api";
import {
  adminUser,
  authorUser,
  defaultUser,
  deleteIcon,
  editIcon,
  modUser,
} from "../Images/Icons";
import {
  BtnWrapper,
  Button,
  ButtonDelete,
  Email,
  Name,
  Roles,
  Select,
  UserItem,
  UsersList,
} from "./Users.styled";
import { toast } from "react-toastify";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState({});

  const { currentUser } = useContext(AuthContext);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/users");
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSave = async (id, name) => {
    if (currentUser.roles !== "admin" && currentUser.roles !== "moderator")
      return console.log("Not authorized!");
    try {
      await API.put(`/users/${id}`, { roles: role });
      toast.success(`Rola użytkownika ${name} została zmieniona na ${role}`);
      fetchUsers();
    } catch (error) {
      console.log(error);
      toast.error(error)
    }
  };

  const handleDelete = async (id, userRoles, name) => {
    console.log(currentUser.roles);
    if (currentUser.roles !== "admin" && currentUser.roles !== "moderator")
      return console.log("Not authorized!");
    if (userRoles === "admin") return console.log("Can not delete 'admin'!");
    try {
      await API.delete(`/users/${id}`);
      toast.warning(`Użytkownik ${name} został usunięty!`)
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UsersList>
      {users.map((user) => (
        <UserItem key={user.id}>
          {user.roles === "admin" && <div>{adminUser}</div>}
          {user.roles === "moderator" && <div>{modUser}</div>}
          {user.roles === "author" && <div>{authorUser}</div>}
          {user.roles === "default" && <div>{defaultUser}</div>}
          <Name>{user.username}</Name>
          <Email>{user.email}</Email>
          <Roles>
            {user.roles === "admin" ? (
              <Select disabled>
                <option value="admin">Admin</option>
              </Select>
            ) : (
              <Select
                onChange={(e) => setRole(e.target.value)}
                defaultValue={user.roles}
              >
                <option value="moderator">Moderator</option>
                <option value="author">Autor</option>
                <option value="default">Default</option>
              </Select>
            )}
            <BtnWrapper>
              <Button
                onClick={() => handleSave(user.id, user.username)}
                disabled={user.roles === "admin"}
              >
                {editIcon}
              </Button>
            </BtnWrapper>
          </Roles>
          <BtnWrapper>
            <ButtonDelete
              onClick={() => handleDelete(user.id, user.roles, user.username)}
              disabled={user.roles === "admin"}
            >
              {deleteIcon}
            </ButtonDelete>
          </BtnWrapper>
        </UserItem>
      ))}
    </UsersList>
  );
};
