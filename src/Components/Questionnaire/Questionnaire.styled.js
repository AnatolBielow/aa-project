import { Field } from "formik";
import styled from "styled-components";

export const Section = styled.section`
  padding: 15px;
  gap: 15px;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.1)
    ),
    url(${(props) => props.img});
  background-size: cover;

  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
  }
`;
export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  @media (min-width: 1200px) {
   margin-top: 200px;   
  }
  
`;
export const Content = styled.p`
  
  margin: 15px auto;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  text-align: justify;
  line-height: 2rem;
  @media (min-width: 1200px) {
    width: 800px;  
  }
`;
export const QuestionnaireWrapper = styled.div` 
font-size: 1.2rem;
text-align: justify;
line-height: 2rem;
  padding: 15px;
  margin-top: 15px;
  max-width: 800px ;
  margin-bottom: 15px;
  background-color: rgba(255, 255, 255, 0.6);
`
export const Item = styled.li`
display: flex;
flex-direction: column;
  margin-top: 15px;
  @media (min-width: 1200px) {
      display: block;
  }
`;
export const RadioGroup = styled.div`
  border: 3px solid white;
  display: inline-block;
  margin: 20px auto;
  border-radius: 10px;
  overflow: hidden;
`;
export const Label = styled.label`
  position: relative;
  color: rgba(0, 0, 0, 0.4);
  display: inline-block;
  cursor: pointer;
  font-weight: bold;
  padding: 5px 20px;
  transition: all 200ms ease-in-out;

  &:last-child {
    border-left: 3px solid white;
  }
`;
export const Input = styled(Field)`
  cursor: pointer;
  display: none;
  opacity: 0.5;
  position: absolute;
  z-index: 2;

  &:hover + ${Label} {
    color: rgba(0, 0, 0, 1);
    background-color: rgba(255, 255, 255, 0.4);
  }
  &:checked + ${Label} {
    color: ${({ theme }) => theme.accent};
    background-color: rgba(255, 255, 255, 1);
  }
`;
export const Positive = styled.div` 
padding: 10px;
line-height: 1.5rem;
text-align: justify;
letter-spacing: 0.05rem;
background-color: rgba(255, 255, 255, 0.4);
`

export const Warning = styled.div` 
color: red;
padding: 10px;
line-height: 1.5rem;
text-align: justify;
letter-spacing: 0.05rem;
background-color: rgba(255, 255, 255, 0.4);
`
export const Button = styled.button` 
display: block;
padding: 15px;
color: white;
font-weight: 700;
text-transform: uppercase;
border: none ;
margin: 15px auto 0 auto;
background-color: ${({theme})=>theme.accent};
-webkit-box-shadow: 0px 4px 11px 1px rgba(0,0,0,0.4); 
box-shadow: 0px 4px 11px 1px rgba(0,0,0,0.4);
transition: all 200ms ease-in-out;
cursor: pointer;
&:hover, &:focus {
    background-color: ${({theme})=>theme.accent2};
-webkit-box-shadow: 0px 4px 11px 1px rgba(0,0,0,0); 
box-shadow: 0px 4px 11px 1px rgba(0,0,0,0);
}
`
export const NotAllAnswers = styled.div` 
font-size: 1.5rem;
font-weight: 700;
@media (min-width: 1200px){
font-size: 2rem;
}

`