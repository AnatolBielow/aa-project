import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import {
  adminUser,
  authorUser,
  defaultUser,
  loginIcon,
  modUser,
} from "../Images/Icons";

import { BtnWrapper, Button } from "./LoginButton.styled";

export const LoginButton = ({setShow}) => {
  const { currentUser, logout } = useContext(AuthContext);



  return (
    <BtnWrapper>
    
      {currentUser ? (
        <Button onClick={logout}>
          {currentUser?.roles === "admin" && <div>{adminUser}</div>}
          {currentUser?.roles === "moderator" && <div>{modUser}</div>}
          {currentUser?.roles === "author" && <div>{authorUser}</div>}
          {currentUser?.roles === "default" && <div>{defaultUser}</div>}
        </Button>
      ) : (
        <Button onClick={()=> {setShow(true)}}>{loginIcon}</Button>
      )}
    </BtnWrapper>
  );
};
