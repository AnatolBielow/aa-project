import { useContext } from "react"
import { AuthContext } from "../../context/authContext"
import { Content, Item, List, Menu, StyledLink, Wrapper } from "./Panel.styled"

export const Panel = ({children}) => {
const {currentUser} = useContext(AuthContext)

const superUser = currentUser?.roles === "admin" || currentUser?.roles ==="moderator"

    return <Wrapper>
        <Menu>
    <List>
        <Item>
            <StyledLink to="/panel/home">Start</StyledLink>
        </Item>
        <Item>
            <StyledLink to="/panel/posts">Posty</StyledLink>
        </Item>
        {superUser && <>
         <Item>
            <StyledLink to="/panel/files">Pliki</StyledLink>
        </Item>
        <Item>
            <StyledLink to="/panel/users">Użytkownicy</StyledLink>
        </Item>
        <Item>
            <StyledLink to="/panel/addresses">Adresy</StyledLink>
        </Item>
        
        </>}
       

    </List>
        </Menu>
       <Content>
        {children}
       </Content>
    </Wrapper>
}