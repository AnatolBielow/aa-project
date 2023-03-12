import styled from "styled-components";

export const Section = styled.section`
  padding: 15px;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.4)
    ),
    url(${(props) => props.img});
  background-size: cover;

  a {
    color: ${({theme})=>theme.accent};
    display: flex;
    box-sizing: content-box;
    gap: 5px;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
    font-weight: 700;
    text-align: center;
    align-items: center;
    cursor: pointer;
    &:hover,
    &:focus {
      color: ${({theme})=>theme.accent2};
      
    }
  }
`;
export const ContactWrapper = styled.div`
  margin-top: 30px;

  @media (min-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
  margin-top: 2rem;
  @media (min-width: 1200px) {
    font-size: 6rem;
  }
`;

export const ContactContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 15px;
  text-align: center;
  font-size: 1.5rem;
  
  @media (min-width: 1200px) {
    width: calc(100vw / 2);
  }
  > div {padding: 30px 10px;
    height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
 -webkit-box-shadow: 0px 4px 11px 1px rgba(0,0,0,0.4); 
box-shadow: 0px 4px 11px 1px rgba(0,0,0,0.4);
}`

