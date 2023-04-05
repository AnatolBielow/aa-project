import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import API from "../../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import {
  Button,
  ButtonsWrapper,
  Content,
  Description,
  Editor,
  EditorContainer,
  HeadWrapper,
  Item,
  Menu,
  MenuTitle,
  Select,
  Status,
  Title,
  Upload,
  Wrapper,
} from "./Write.styled";
import axios from "axios";

const URL = process.env.REACT_APP_HOST;

export const Write = () => {
  const state = useLocation().state;
  const [title, setTitle] = useState(state?.title || "");
  const [desc, setDesc] = useState(state?.description || "");
  const [content, setContent] = useState(state?.content || "");
  const [status, setStatus] = useState("draft");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(`${URL}upload/`, formData);
      console.log(file)
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleReset = () => {
   setTitle(state?.title || "");
  setDesc(state?.description || "");
  setContent(state?.content || "");
   setStatus("draft");
  setFile(state?.img || null);
  }


  const handleSend = async () => {
    const imgUrl = await upload();
    try {
      state
        ? await API.put(`/posts/${state.id}`, {
            title,
            description: desc,
            content,
            img: file ? imgUrl : "",
            status,
          })
        : await API.post(`/posts/`, {
            title,
            description: desc,
            content,
            img: file ? imgUrl : "",
            status,
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
      navigate("/panel/posts");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <Content>
        <HeadWrapper>
          <Title
            type="text"
            placeholder="Tytuł"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Description
            type="text"
            placeholder="Deskrypcja"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </HeadWrapper>
        <EditorContainer>
          <Editor theme="snow" value={content} onChange={setContent} />
        </EditorContainer>
      </Content>
      <Menu>
          <Item>
            {state? <MenuTitle>Edycja</MenuTitle>: <MenuTitle>Nowy post</MenuTitle>}
          </Item>
            
    
          <Item>
            <Status>Status: </Status> <span>Edycja</span>
          </Item>
        
         <Item>
          <Select
                onChange={(e) => setStatus(e.target.value)}
                defaultValue={status}
              >
                <option value="draft">Wersja robocza</option>
                <option value="private">Post prywatny</option>
                <option value="public">Post publiczny</option>
              </Select>
         </Item>
          
        <Item>
          <input
          style={{ display: "none" }}
            type="file"
            id="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Upload htmlFor="file">
            Dodaj zdjęcie
          </Upload>
          {file?.name && <p>{file.name}</p>}
        </Item>
        
          
          <ButtonsWrapper>
            <Button onClick={() => handleSend()}>Publikuj</Button>
            <Button onClick={() => handleReset()}>Reset</Button>
          </ButtonsWrapper>
      
      </Menu>
    </Wrapper>
  );
};
