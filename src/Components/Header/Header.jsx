import { Menu } from "../Menu";
import logo from "./aalogo.svg";
import { HeaderStyled, Logo} from "./Header.styled";
 
export const Header = () => {
  return (
    <HeaderStyled>
      <Logo src={logo} alt="logo" />
      <Menu />
    </HeaderStyled>
  );
};

