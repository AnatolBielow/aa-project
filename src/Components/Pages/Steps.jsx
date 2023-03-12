import { Page } from "./Page";
import image from "../Images/mountain.jpg";
import { steps } from "../../Helpers";

const title = "12 Kroków AA";

export const Steps = () => {
  
  return <Page title={title} img={image} items={steps} />;
};
