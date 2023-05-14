import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../Helpers";

export const AddressesContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  /* display: flex;
 
  flex-direction: column; */
  /* gap: 10px; */
  width: 240px;
  padding: 20px;
  background-color: white;
  border: 1px solid grey;
  border-radius: 10px;
`;

export const Title = styled.h3` 
text-transform: uppercase;
font-size: 18px;
font-weight: 700;
`

export const Content = styled.p` 
font-size: 16px;
line-height: 20px;
margin-top: 5px;
`

export const Bold = styled.span` 
font-weight: 700;
`
export const Buttons = styled.div` 
display: flex;
justify-content: space-between;

`

export const BtnWrapper = styled.div` 
display: flex;
justify-content: space-between;
align-items: center;
margin: auto 0;
` 

export const Edit = styled(NavLink)` 
border: none;
color: ${theme.accent};
background-color: transparent;
cursor: pointer;

&:hover,
  &:focus {
    color: ${theme.accent2};
    
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