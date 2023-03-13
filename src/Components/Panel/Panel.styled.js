import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../Helpers";

export const Wrapper = styled.div` 
display: flex;
width: 1200px;
margin: 0 auto;
min-height: 600px;

`

export const Menu = styled.div` 
width: 200px;
background-color: ${theme.accent};
border-radius: 25px 0 0 25px;
`
export const List = styled.ul` 
display: block;
height: 100%;
margin-top: 40px;

`

export const Item = styled.li` 

`
export const StyledLink = styled(NavLink)` 
display: flex;
height: 40px;
color: white;
align-items: center;
justify-content: center;
text-transform: uppercase;

font-weight: 700;
letter-spacing: 0.2rem;
border-top: 1px solid ${theme.accent};
border-bottom: 1px solid ${theme.accent};
transition: all 200ms ease;
&:hover, &:focus, &.active {
    border-top: 1px solid grey;
border-bottom: 1px solid grey;
background-color: ${theme.accent2};
}
`

export const Content = styled.div` 
display: flex;
background-color: ${theme.primaryBackground};
flex: 1;
border: 1px solid grey;
border-radius: 0 25px 25px 0;
`