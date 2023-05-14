import styled from "styled-components";
import { theme } from "../../Helpers";

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #555;
`;

export const Post = styled.div`
  /* display: flex;
 
  flex-direction: column; */
  /* gap: 10px; */
  width: 400px;
  padding: 20px;
  background-color: white;
  border: 1px solid #d1d1d1;
`;

export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const PostTitle = styled.h3`
  color: #555;
  font-weight: 700;
`;

export const Button = styled.button`
  width: max-content;
  padding: 7.5px 15px;
  border: none;
  cursor: pointer;
  color: ${theme.accent};
  font-weight: 700;
  background-color: white;
  border: 1px solid ${theme.accent};

  &:hover {
    border: 1px solid white;
    background-color: ${theme.accent};
    color: white;
  }
`;
