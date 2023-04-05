import styled from "styled-components";
import { theme } from "../../../Helpers/theme";

export const EventsSection = styled.section`
  padding: 20px;
  gap: 15px;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.4)
    ),
    url(${(props) => props.img});
  background-size: cover;

  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
  }
`;

export const EventsPage = styled.div``;

export const Posts = styled.div`
  margin-top: 50px;
  gap: 50px;
  max-width: 1000px;
  background-color: white;
  padding: 20px;
  border: 1px solid #d1d1d1;
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Post = styled.div`
  padding-bottom: 20px;
  background-color: rgba(255, 255, 255, 1);
  &:not(:last-child) {
    border-bottom: 1px solid #d1d1d1;
  }

  @media (min-width: 1200px) {
    display: flex;
    gap: 100px;
    &:nth-child(2n + 1) {
      flex-direction: row-reverse;
    }
  }
`;

export const ImgContainer = styled.div`
  img {
    max-width: 300px;
  }
`;

export const Img = styled.img``;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h3`

  font-size: 48px;
`;

export const Description = styled.p`

  margin-top: 20px;
`;
export const Button = styled.button`
  width: max-content;
  padding: 10px 20px;
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
