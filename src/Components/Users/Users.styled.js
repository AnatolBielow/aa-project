import styled from "styled-components";
import { theme } from "../../Helpers";

export const UsersList = styled.ul` 
width: 100%;
padding: 20px;
`

export const UserItem = styled.li` 
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 50px;
border-bottom: 1px solid grey;
`

export const Name = styled.span` 
font-weight: 700;
width: 200px;
`
export const Email = styled.span` 
width: 200px;
`
export const Select = styled.select` 
width: 100px;
`

export const Roles = styled.div` 
display: flex;
width: 170px;
justify-content: space-between;
`

export const BtnWrapper = styled.div` 
display: flex;
justify-content: center;
align-items: center;

`

export const Button = styled.button` 
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
  &:disabled {
    color: grey;
    cursor: not-allowed;
  }
`