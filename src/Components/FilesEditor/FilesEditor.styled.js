import ReactQuill from "react-quill";
import styled from "styled-components";
import { theme } from "../../Helpers/theme";

export const Wrapper = styled.div`
 
  padding: 20px;

  width: 100%;
`;

export const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
export const Content = styled.div`
  border: 1px solid grey;
  padding: 10px;
  background-color: whitesmoke;
  border-radius: 10px;
`;

export const Title = styled.textarea`
  width: 200px;
  height: 60px;
  resize: none;
`;
export const Description = styled.textarea`
  width: 420px;
  height: 60px;
  resize: none;
`;

export const Select = styled.select`
  width: 150px;
`;

export const EditorContainer = styled.div`
  height: 400px;
  margin-top: 20px;
  background-color: white;
  overflow: scroll;
`;

export const Editor = styled(ReactQuill)`
  height: 100%;
  border: none;
`;

export const Menu = styled.div`
  box-sizing: border-box;
  border: 1px solid grey;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  padding: 10px;
  background-color: whitesmoke;
`;

export const MenuTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
`;

export const Status = styled.span`
  font-weight: 700;
  margin-top: 15px;
`;

export const Upload = styled.label`
  width: max-content;
  padding: 7px 15px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  cursor: pointer;
  background-color: white;
  border: 2px solid ${theme.accent};
  color: ${theme.accent};
  margin-top: 20px;

  &:hover {
    border: 2px solid white;

    background-color: ${theme.accent};
    color: white;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
export const Button = styled.button`
  width: max-content;
  padding: 7px 15px;
  font-weight: 700;
  cursor: pointer;
  background-color: white;
  border: 2px solid ${theme.accent};
  color: ${theme.accent};
  margin-top: 20px;

  &:hover {
    border: 2px solid white;

    background-color: ${theme.accent};
    color: white;
  }
`;

export const FilesWrapper = styled.div`
margin-top: 30px;
`

export const HeaderItem = styled.div` 
width: 300px;
`
 export const FilesList = styled.ul` 
 
 display: flex;
flex-direction: column;

 `

export const FileItem = styled.div` 
width: 300px;
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
justify-content: end;
align-items: center;
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