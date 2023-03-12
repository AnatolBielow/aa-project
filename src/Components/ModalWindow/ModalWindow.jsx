
import { createPortal } from "react-dom";
import { Overlay } from "./ModalWindow.styled";

const modal = document.querySelector("#modal");

export const ModalWindow = ({ children , open, trygger}) => {

  return createPortal(
    <Overlay open={open} onClick={trygger}>
      <div>{children}</div>
    </Overlay>,
    modal
  );
};
