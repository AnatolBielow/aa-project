import React, { useState } from "react";
import { Formik } from "formik";
import {
  Input,
  Label,
  Message,
  ErrorMessage,
  Submit,
} from "./ComentaryForm.styled";
import { validationSchema } from "./validation";
import { toast } from "react-toastify";

export const ComentaryForm = () => {
  const [submited, setSubmitted] = useState(false);
  const initialValues = { name: "", email: "", message: "" };

  const handleSubmit = (e) => {
    console.log("Sending");
    const data = e.values;
    setSubmitted(true);
    fetch("https://api.aasztokholm.se/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");

      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(false);
        toast.success("Wiadomość wysłana");
      }
    });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
      onSubmit={(values, { resetForm }) => {
        handleSubmit({values});
        resetForm();
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Label htmlFor="name">Imię</Label>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={props.handleChange}
            value={props.values.name}
          />
          {props.errors.name && (
            <ErrorMessage>{props.errors.name}</ErrorMessage>
          )}
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

          <Submit type="submit">
            {submited ? `Wysyłanie...`: `Wyślij wiadomość`}
          </Submit>
        </form>
      )}
    </Formik>
    
  );
          }