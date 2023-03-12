import styled from "styled-components";

export const Overlay = styled.div` 
 width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9997;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000080;
  transform: scale(${({ open }) => (open ? 1 : 0)});
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: opacity 0.4s ease-in-out;
 

`