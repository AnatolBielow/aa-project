import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { menu } from "../../Helpers";

import { Hamburger } from "../Hamburger";
import { Login } from "../Login";
import Register from "../Login/Register";
import { LoginButton } from "../LoginButton/LoginButton";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import {
  NavigationList,
  Navigation,
  NavigationItem,
  Link,
  Overlay,
  MenuWrapper,
} from "./Menu.styled";

export const Menu = ({ handleLoginButton }) => {
  const { currentUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(true);

  const superUser =
    currentUser?.roles === "admin" ||
    currentUser?.roles === "moderator" ||
    currentUser?.roles === "author";

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      setOpen(!open);
    }
  };

  const handleClick = (e) => {
    if (open && e.currentTarget === e.target) {
      setOpen(!open);
    }
  };

  const trygger = (e) => {
    if (e.currentTarget === e.target) {
      setShow(!show);
    }
  };

  const loginPageTrygger = () => {
    setLogin(!login);
  };

  useEffect(() => {
    if (currentUser) {
      setShow(false);
    }
  }, [currentUser]);

  return (
    <MenuWrapper>
      <ModalWindow open={show} trygger={trygger}>
        {login ? (
          <Login loginPageTrygger={loginPageTrygger} />
        ) : (
          <Register loginPageTrygger={loginPageTrygger} />
        )}
      </ModalWindow>
      <Hamburger open={open} setOpen={setOpen} />
      <Overlay open={open} onClick={handleBackdropClick} />
      <Navigation open={open}>
        <NavigationList>
          {menu.map((item) => (
            <NavigationItem key={item.id}>
              <Link to={item.id} onClick={handleClick}>
                {item.value}
              </Link>
            </NavigationItem>
          ))}
          {superUser && (
            <NavigationItem>
              <Link to="/panel/home">Panel</Link>
            </NavigationItem>
          )}
          <LoginButton setShow={setShow} />
        </NavigationList>
      </Navigation>
    </MenuWrapper>
  );
};
