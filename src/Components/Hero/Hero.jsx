import { contact } from "../../Helpers";
import { phone } from "../Images/Icons";
import image from "../Images/lonely.png";
import { CallMe, PhoneContainer, Title, ImageContainer, HeroContainer } from "./Hero.styled";

export const Hero = () => {
  const {number} = contact
  return (
    <HeroContainer>
      <PhoneContainer>
        <Title>Masz problem z alkoholem, szukasz pomocy?</Title>
        <CallMe>Zadzwoń!</CallMe>

        <a href={`tel:${number}`}>
          {phone}
          {number}
        </a>
      </PhoneContainer>
      <ImageContainer>
        <img src={image} alt="Samotny człowiek" />
      </ImageContainer>
      
    </HeroContainer>
  );
};
