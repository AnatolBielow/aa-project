import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import API from "../../services/api"
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import {
  Content,
  Description,
  Editor,
  EditorContainer,
  HeadWrapper,
  Menu,
  Title,
  Wrapper,
} from "./Write.styled";

export const Write = () => {
  const state = useLocation().state;
  const [title, setTitle] = useState(state?.title || "");
  const [desc, setDesc] = useState(state?.desc || "");
  const [content, setContent] = useState(state?.content || "");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await API.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await API.put(`/posts/${state.id}`, {
            title,
            description : desc,
            content,
            img: file ? imgUrl : "",
          })
        : await API.post(`/posts/`, {
            title,
            description: desc,
            content,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
    
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
            onChange={(e) => setTitle(e.target.value)}
          />
          <Description
            type="text"
            placeholder="Deskrypcja"
            onChange={(e) => setDesc(e.target.value)}
          />
        </HeadWrapper>
        <EditorContainer>
          <Editor theme="snow" value={content} onChange={setContent} />
        </EditorContainer>
      </Content>
      <Menu>
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item"></div>
      </Menu>
    </Wrapper>
  );
};
