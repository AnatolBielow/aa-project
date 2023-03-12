import styled from "styled-components";
import { theme } from "../../Helpers";

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
`