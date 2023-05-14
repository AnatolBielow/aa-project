import styled from "styled-components";

export const Wrapper = styled.div` 
display: flex;
width: 100%;
padding: 20px;
justify-content: space-between;
gap:25px;
`

export const Editor = styled.div` 
border: 1px solid grey;
padding: 10px;
background-color: whitesmoke;
border-radius: 10px;
width: 350px;
`  

export const Input = styled.textarea` 

height: 25px;
resize: none;
`

export const Label = styled.label` 
font-size: 16px;

display: flex;
padding: 10px;
align-items: center;
justify-content: space-between;

`
