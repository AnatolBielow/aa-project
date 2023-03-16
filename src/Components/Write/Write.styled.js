import ReactQuill from "react-quill"
import styled from "styled-components"

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
display: flex;
width: 200px;
height: 200px;
gap: 20px;
border-radius: 10px;
padding: 10px;
background-color: whitesmoke;
`