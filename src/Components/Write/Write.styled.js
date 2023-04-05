import ReactQuill from "react-quill"
import styled from "styled-components"
import {theme} from "../../Helpers/theme"

export const Wrapper = styled.div` 
display: flex;
padding: 20px;
justify-content: space-between;
width: 100%;
`

export const HeadWrapper = styled.div` 
display: flex;
justify-content: space-between;
gap: 20px;
`
export const Content = styled.div` 
border: 1px solid grey;
padding: 10px;
background-color: whitesmoke;
border-radius: 10px;
` 

export const Title = styled.textarea` 
width: 200px;
height: 60px;
resize: none;
`
export const Description = styled.textarea`
width: 420px;
height: 60px;
resize: none;

` 

export const Select = styled.select` 
width: 150px;
`

export const EditorContainer = styled.div` 
height: 400px;
margin-top: 20px;
background-color: white;
overflow: scroll;
`

export const Editor = styled(ReactQuill)` 
height: 100%;
border: none;

` 

export const Menu = styled.div` 
box-sizing: border-box;
border: 1px solid grey;
width: 200px;
height: 200px;
border-radius: 10px;
padding: 10px;
background-color: whitesmoke;
`

export const MenuTitle = styled.h3` 
font-size: 18px;
font-weight: 700;
`
export const Item = styled.div`
width: 100%;
height: 30px;
`
export const Status = styled.span`
font-weight: 700;
margin-top: 15px;
` 

export const Upload = styled.label` 
font-weight: 700;
color: ${theme.accent};
cursor: pointer;
&:hover, &:focus {
    color: ${theme.accent2};
}
`

export const ButtonsWrapper = styled.div`
display: flex;
justify-content: space-between;
`
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
`