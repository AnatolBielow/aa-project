import styled from "styled-components";

export const HamburgerStyled = styled.button`
  display: none;

  @media (max-width: 1200px) {
    cursor: pointer;
    display: flex;
    position: fixed;
    margin-left: 10px;
    padding: 0;
    top: 20px;
    right: 20px;
    width: 2rem;
    height: 2rem;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 9999;
    background: transparent;
    border: none;
    &:focus {
      outline: none;
    }


div{


  background: ${({ theme }) => theme.primaryText};
  width: 2rem;
  height: 0.25rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.primaryText};
  position: relative;
  transform-origin: 1px;
  transition: all 0.4s linear;

  :first-child {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  :nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
  }

  :nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
}
  }
`;
