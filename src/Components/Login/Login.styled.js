import styled from "styled-components";
import { theme } from "../../Helpers";

export const Wrapper = styled.div` 
display: flex;
flex-direction: column;
justify-content: center;
background-color: white;
width: 260px;
border-radius: 25px;
text-align: center;
-webkit-box-shadow: 0px 4px 11px 1px rgba(0,0,0,0.4); 
box-shadow: 0px 4px 11px 1px rgba(0,0,0,0.4);
`
export const User = styled.div` 
position: relative;
display: flex;
align-items: center;
justify-content: center;
left: 80px;
top: -50px;
background-color: #f3f3f3;
width: 100px;
height: 100px;
border-radius: 50px;
box-shadow: 3px 10px 43px 1px rgba(0,0,0,0.36);
-webkit-box-shadow: 3px 10px 43px 1px rgba(0,0,0,0.36);
color: white;
`
export const Title = styled.h2` 
text-align: center;
font-size: 20px;

`

export const Form = styled.form`
display: block;


`
export const Input = styled.input` 
display: block;
margin: 10px auto;
padding: 5px 10px;
height: 30px;
width: 170px;
border-radius: 25px;
border: none;
background-color: #f2f2f2; 
`

export const Button = styled.button` 
display: block;
cursor: pointer;
height: 40px;
width: 190px;
text-transform: uppercase;
background-color: ${theme.accent};
color: white;
font-weight: 700;
margin: 20px auto;
padding: 0 30px;
border: 3px solid ${theme.accent};
border-radius: 20px;
transition: all 200ms ease-in;
&:hover, &:focus {
    background-color: ${theme.accent2};
}
`

export const LinkButton = styled.button` 
cursor: pointer;
border: none;
background-color: transparent;
font-size: 16px;
`

export const Paragraph = styled.span` 
display: block;
font-size: 16px;
margin-bottom: 20px;
`