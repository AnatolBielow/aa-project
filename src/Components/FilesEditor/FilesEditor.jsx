import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";
import API from "../../services/api";
import {
    BtnWrapper,
  Button,
  ButtonDelete,
  ButtonsWrapper,
  File,
  FileItem,
  FilesHeader,
  FilesList,
  FilesWrapper,
  HeaderItem,
  Item,

  Upload,
  Wrapper,
} from "./FilesEditor.styled";

import { deleteIcon, fileIcon } from "../Images/Icons/Icons";

const URL = process.env.REACT_APP_CLIENT;
export const FilesEditor = () => {
  const [uploadFile, setUploadFile] = useState(null);
  const [files, setFiles] = useState([]);

  const name = (file) => file.slice(13, file.length);

  const formatDate = (file) => {
    const d= Number(file.slice(0, 13))
      return moment(d).format('YYYY-MM-DD o HH:mm')
  } 

  const fetchFiles = async () => {
    try {
      const res = await API.get(`uploads/files/`);
      setFiles(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", uploadFile);
      const res = await axios.post(
        "https://api.aasztokholm.se/api/uploads/files/",
        formData
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    await API.delete(`uploads/files/${id}`);
    fetchFiles();
  };

  return (
    <Wrapper>
      <ButtonsWrapper>
        <input
          style={{ display: "none" }}
          type="file"
          id="file"
          name="file"
          onChange={(e) => setUploadFile(e.target.files[0])}
        />
        <Upload htmlFor="file">
          {uploadFile?.name ? <>{uploadFile.name}</> : <>Dodaj plik</>}
        </Upload>

        <Button onClick={() => upload()}>Zapisz</Button>
      </ButtonsWrapper>

      {files ? (
        <FilesWrapper>
            <FilesHeader>
                <HeaderItem>Nazwa pliku</HeaderItem>
                <HeaderItem>Data utworzenia</HeaderItem>
                <HeaderItem></HeaderItem>
            </FilesHeader>
            <FilesList>
                {files.map((file, index) => (
            <Item key={index}>
                <FileItem>
                 <File href={`uploads/files/${file}`} download>
                {fileIcon}
                {name(file)}
              </File>   
                </FileItem>
              <FileItem>{formatDate(file)}</FileItem>
             <BtnWrapper>
                <ButtonDelete onClick={() => handleDelete(file)}>{deleteIcon}</ButtonDelete>
             </BtnWrapper>
              
            </Item>
          ))} 
            </FilesList>
         
        </FilesWrapper>
      ) : null}
    </Wrapper>
  );
};
