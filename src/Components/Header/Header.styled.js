import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  font-size: calc(10px + 2vmin);
  color: white;
  height: 154px;
  width: 100%;
`;

export const Logo = styled.img` 
height: 20vmin;
  pointer-events: none;
  padding: 2vmin;
  @media (min-width: 1200px) {
    padding: 25px;
  }
`