import { Formik, Form } from "formik";
import { useState } from "react";
import {
  Section,
  Content,
  Title,
  Item,
  RadioGroup,
  Label,
  Input,
  QuestionnaireWrapper,
  Warning,
  Button,
  NotAllAnswers,
  Positive
} from "./Questionnaire.styled";
import image from "../Images/question.jpg";
import { positive, warning, notAllAnswers, questions, limit } from "../../Helpers/questionnaire";
import { BackButton } from "../BackButton";

export const Questionnaire = () => {
  
  const [status, setStatus] = useState("edle");
  const [summa, setSumma] = useState(0)
  const handleSubmit = (values) => {
    const valuesString = Object.values(values.checked);
    const nuevo = valuesString.map((i) => Number(i));
    let sum = 0;
    for (let i = 0; i < nuevo.length; i++) {
      sum += nuevo[i];
    }
    if (questions.length > nuevo.length) {
      setSumma(sum)
      return setStatus("notAllAnsvers");
    }
    if (sum < limit) {
      setSumma(sum)
      return setStatus("positive");
    }
    if (sum >= limit) {
      setSumma(sum)
      return setStatus("warning");
    }
  };

  return (
    <Section img={image}>
      <Title>Sprawdź, czy masz problem z alkoholem</Title>
      <div>
        <Content>
          Przeczytaj dokładnie kolejne pytania. Zastanów się nad odpowiedzią.
          Bądź uczciwy, tylko wtedy wypełnianie testu ma sens
        </Content>
        <Formik
          initialValues={{
            checked: [],
          }}
          onSubmit={handleSubmit}
        >
          {({ values, errors }) => (
            <QuestionnaireWrapper>
            <Form>
              
              <ul>
                {questions.map((item, index) => (
                  <Item key={index}>
                    <div id={index}>
                      <p>
                        {index + 1}. {item.question}
                      </p>
                    </div>
                    <RadioGroup role="group" aria-labelledby="checked">
                      
                       
                         
                         <Input
                          type="radio"
                          id={`yes${index}`}
                          name={`checked.${index}`}
                          value="1"
                        />
                            
                        <Label htmlFor={`yes${index}`}>Tak</Label> 
                      
                       <Input
                          type="radio"
                          id={`no${index}`}
                          name={`checked.${index}`}
                          value="0"
                        />
                        <Label htmlFor={`no${index}`}> Nie</Label>
                    </RadioGroup>
                  </Item>
                ))}
              </ul>
              
              {status === "positive" && <Positive>{positive({summa})}</Positive>}
              {status === "warning" && <Warning>{warning({summa})}</Warning>}
              {status === "notAllAnsvers" && <NotAllAnswers>{notAllAnswers()}</NotAllAnswers>}
              <Button type="submit>">Sprawdź wynik</Button>
            </Form>
            </QuestionnaireWrapper>
          )}
        </Formik>
        <BackButton/>
      </div>
    </Section>
  );
};
