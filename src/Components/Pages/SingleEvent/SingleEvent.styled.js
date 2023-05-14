import styled from "styled-components";

export const EventSection = styled.section` 
display: flex;
  gap: 50px;
  padding: 20px;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.4)
    ),
    url(${(props) => props.img});
  background-size: cover;

  @media (min-width: 1200px) {
    display: flex;
    justify-content: center;
  }

`

export const Post = styled.div` 
display: flex;
flex: 5;
flex-direction: column;
gap: 30px;
max-width: 800px;
padding: 20px;
background-color: white;
border: 1px solid #d1d1d1;
`

export const Img = styled.img`
width: 100%;
object-fit: cover;
`

export const Title = styled.h2` 
font-size: 42px;
font-weight: 700;
color: #333;
`

export const Description = styled.p` 
font-weight: 700;
`