import styled from "styled-components";

export const Form = styled.div` 
display: block;
padding: 15px ;
margin-top: 15px;
background-color: rgba(255, 255, 255, 0.7);
-webkit-box-shadow: 0px 4px 11px 1px rgba(0,0,0,0.4); 
box-shadow: 0px 4px 11px 1px rgba(0,0,0,0.4); 
@media(min-width:767px) {
    margin-top: 0;
}
`
export const Input = styled.input` 
display: block;
box-sizing: border-box;
width: 100%;
height: 2rem;
/* margin-top: 1.5rem; */

@media(min-width:767px) {
    width: 400px;
}

`
export const Message = styled.textarea` 
display: block;
box-sizing: border-box;
width: 100%;
height: 10rem;
resize: none;

@media(min-width:767px) {
    width: 400px;
}
`
export const Label = styled.label` 
display: block;
margin-top: 1.5rem;
margin-bottom: 0.5rem;
font-weight: 700;
`
export const ErrorMessage = styled.div`
color: red;
`

export const Submit = styled.button` 
display: block;
padding: 15px;
color: white;
font-weight: 700;
text-transform: uppercase;
border: none ;
margin: 15px auto 0 auto;
background-color: ${({theme})=>theme.accent};
-webkit-box-shadow: 0px 4px 11px 1px rgba(0,0,0,0.4); 
box-shadow: 0px 4px 11px 1px rgba(0,0,0,0.4);
transition: all 200ms ease-in-out;
cursor: pointer;
&:hover, &:focus {
    background-color: ${({theme})=>theme.accent2};
-webkit-box-shadow: 0px 4px 11px 1px rgba(0,0,0,0); 
box-shadow: 0px 4px 11px 1px rgba(0,0,0,0);
}
`
