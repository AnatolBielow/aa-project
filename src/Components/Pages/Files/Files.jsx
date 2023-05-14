import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";
import API from "../../../services/api";
import {
  BtnWrapper,
  ButtonEdit,
  File,
  FileItem,
  FilesHeader,
  FilesList,
  FilesWrapper,
  HeaderItem,
  Item,
  Wrapper,
} from "./Files.styled";

import { downloadIcon, fileIcon } from "../../Images/Icons/Icons";

const URL = process.env.REACT_APP_CLIENT;

export const Files = () => {
  const [files, setFiles] = useState([]);

  const name = (file) => file.slice(13, file.length);

  const formatDate = (file) => {
    const d = Number(file.slice(0, 13));
    return moment(d).format("YYYY-MM-DD o HH:mm");
  };

  const fetchFiles = async () => {
    try {
      const res = await API.get(`uploads/files`);
      setFiles(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <Wrapper>
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
                  <File href={`${URL}uploads/files/${file}`}>
                    <div>{fileIcon}</div>
                    {name(file)}
                  </File>
                </FileItem>
                <FileItem>{formatDate(file)}</FileItem>
              
                  <BtnWrapper>
                    <ButtonEdit
                      href={`${URL}uploads/files/${file}`}
                      download
                    >
                      <div>{downloadIcon}</div>
                    </ButtonEdit>
                  </BtnWrapper>
                    
           
              </Item>
            ))}
          </FilesList>
        </FilesWrapper>
      ) : null}
    </Wrapper>
  );
};
