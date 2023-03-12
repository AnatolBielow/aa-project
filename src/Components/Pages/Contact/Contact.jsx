import {
  Section,
  Title,
  ContactWrapper,
  ContactContainer,
} from "./Contact.styled";
import image from "../../Images/contact.jpg";
// import ComentaryForm from "../../ComentaryForm/ComentaryForm";
// import { Form } from "../../ComentaryForm/ComentaryForm.styled";
import { contactPhone, contactMail } from "../../Images/Icons";

export const Contact = ({ contact }) => {
  const { number, email } = contact;
  return (
    <Section img={image}>
      <Title>Kontakt</Title>
      <ContactWrapper>
        <ContactContainer>
          <div>
            Dyżury pełnimy od poniedziałku do piątku w godz. 18.00-22.00 oraz
            soboty i niedziele w godz. 9.00 – 22.00
          </div>
          <div>
            <p>Możesz do nas zadzwonić</p>
            <a href={`tel:${number}`}>{contactPhone}{number}</a>
          </div>
          <div>
            <p>Zawsze możesz napisać do nas email</p>

            <a href={"mailto:" + email}>{contactMail}{email}</a>
          </div>
        </ContactContainer>

        {/* <Form>
          <ComentaryForm />
        </Form> */}
      </ContactWrapper>
    </Section>
  );
};
