import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../Helpers";

export const Wrapper = styled.div` 
width: 100%;
`

export const PostsList = styled.ul` 
display: flex;
flex-direction: column-reverse;
padding: 20px;
`

export const PostItem = styled.li` 
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 50px;
border-bottom: 1px solid grey;
`

export const Title = styled.span` 
font-weight: 700;
width: 200px;
`
export const Desc = styled.div` 
width: 400px;
max-height: 50px;
text-align: center;
overflow: hidden;
`


export const BtnWrapper = styled.div` 
display: flex;
justify-content: center;
align-items: center;

`

export const Edit = styled(NavLink)` 
border: none;

background-color: transparent;
cursor: pointer;

&:hover,
  &:focus {
    color: ${theme.accent};
    
  }
  &:disabled {
    color: grey;
    cursor: not-allowed;
  }
`
export const ButtonDelete = styled.button` 
border: none;

background-color: transparent;
cursor: pointer;

&:hover,
  &:focus {
    color: red;
    
  }
`