import {
  Content,
  AboutSection,
  SecondTitle,
  AboutTitle,
  ImageContainer,
  ContentWrapper,
  Copyright,
} from "./Page.styled";
import image from "../Images/sunset.jpg";
import { about } from "../../Helpers";


export const About = () => {
  const { title, secondTitle, content, copywrite } = about;
  return (
    <AboutSection>
      <ImageContainer img={image}>
        <AboutTitle>{title}</AboutTitle>
      </ImageContainer>
      <ContentWrapper>
        <SecondTitle>{secondTitle}</SecondTitle>
        <Content>{content}</Content>
        <Copyright>{copywrite}</Copyright>
      </ContentWrapper>
    </AboutSection>
  );
};
