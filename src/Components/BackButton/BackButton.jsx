import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Button } from "./BackButton.styled";
export const BackButton = () => {
  const back = useNavigate();
  
  return (
    <Button
      onClick={() => back(-1)}>
      <RiArrowGoBackFill size={30} />
    </Button>
  );
};
