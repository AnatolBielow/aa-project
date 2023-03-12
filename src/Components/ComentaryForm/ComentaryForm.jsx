import React from "react";
import {Formik} from "formik";
import { Input, Label, Message, ErrorMessage, Submit } from "./ComentaryForm.styled";
import { validationSchema } from "./validation";

 
const initialValues = { name: "",
      email: "",
      message: "",
    }

 const ComentaryForm = () => (
  <Formik
  initialValues={initialValues}
  validationSchema={validationSchema}
  validateOnChange={false}
  onSubmit={(values, actions) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  }}
>

  {props => (
 
    <form onSubmit={props.handleSubmit}
    >
      <Label htmlFor="name">Imię</Label>
      <Input
        id="name"
        name="name"
        type="text"
        onChange={props.handleChange}
        value={props.values.name}  
      />
{props.errors.name && <ErrorMessage>{props.errors.name}</ErrorMessage>}
      <Label htmlFor="email">E-mail</Label>
      <Input
        id="email"
        name="email"
        type="email"
        onChange={props.handleChange}
        value={props.values.email}
        keyboardType="email-address"
      />
       {/* <ErrorMessage component="div" name="email" /> */}
       
      <Label htmlFor="message">Zostaw wiadomość</Label>
      <Message
        id="message"
        name="message"
        type="text"
        onChange={props.handleChange}
        value={props.values.message}
      />

      <Submit type="submit">Wyślij wiadomość</Submit>
   
    </form>
  )}
  </Formik>
 )

export default ComentaryForm;
