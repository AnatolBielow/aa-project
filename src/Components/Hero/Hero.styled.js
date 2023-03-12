import styled from "styled-components";
import { theme } from "../../Helpers";

export const PhoneContainer = styled.section`
  margin: 50px auto;
  text-align: center;

  a {
    color: ${theme.accent};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    align-items: center;
    cursor: pointer;
    &:hover,
    &:focus {
      color: ${theme.accent2};
    }
    @media (min-width:1200px) {
      font-size: 5rem;
    }
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  line-height: 3rem;
  color: ${theme.accent};
`;

export const CallMe = styled.p`
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
`;
export const ImageContainer = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    width: 600px;
    height: auto;
    img {
      height: 100%;
    }
  }
`;
export const HeroContainer = styled.div`
  
  padding: 15px;
  @media (min-width: 1200px) {
    display: flex;
    padding: 25px;
  }
`;
