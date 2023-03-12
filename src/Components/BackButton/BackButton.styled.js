import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  left: 30px;
  bottom: 70px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  -webkit-box-shadow: 0px 4px 11px 1px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 11px 1px rgba(0, 0, 0, 0.4);
  transition: all 200ms ease-in-out;
  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 1);
    -webkit-box-shadow: 0px 4px 11px 1px rgba(0, 0, 0, 0);
    box-shadow: 0px 4px 11px 1px rgba(0, 0, 0, 0);
  }
`;
