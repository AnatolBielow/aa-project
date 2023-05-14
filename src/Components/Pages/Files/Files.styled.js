import styled from "styled-components";
import { theme } from "../../../Helpers/theme";

export const Wrapper = styled.div`
 
  padding: 20px;
`;

export const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const FilesWrapper = styled.div`
margin-top: 30px;
`

export const HeaderItem = styled.div` 
width: 300px;
`
 export const FilesList = styled.ul` 
/*  
 display: flex;
flex-direction: column; */

 `

export const FileItem = styled.div` 
width: 300px;
overflow: hidden;
` 
export const File = styled.a`
display: flex;
align-items: center;
color: black;
&:hover, &:focus {
  color: ${theme.accent};
}
`
export const FilesHeader = styled.div` 
display: flex;
padding: 10px;
justify-content: space-between;
background-color: #d9f5ff;
font-weight: 700;
border-bottom: 1px solid #cdecf7;
`

export const Item = styled.li` 
display: flex;
padding: 5px;
justify-content: space-between;
background-color: #d9f5ff;
&:nth-child(even) {
  background-color: #cdecf7;
}
`
export const BtnWrapper = styled.div` 
display: flex;
width: 300px;
align-items: center;
`

export const ButtonEdit = styled.a` 

color: black;

cursor: pointer;

&:hover,
  &:focus {
    color: ${theme.accent};
    
  }
`