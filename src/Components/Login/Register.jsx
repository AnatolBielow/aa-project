import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import API from "../../services/api";
import { UserIcon } from "../Images/Icons";
import { Button, Form, Input, LinkButton, Paragraph, Title, User, Wrapper } from "./Login.styled";

const Register = ({ loginPageTrygger }) => {
  const URL = process.env.REACT_APP_HOST
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("auth/register", inputs);
      toast.success("Jesteś dodany do bazy!");
      loginPageTrygger();
    } catch (err) {
      setError(err.response.data);
    }
  };

console.log(URL)

  return (
    <Wrapper>
      <User>{UserIcon}</User>
      <Title>Register</Title>
      <Form>
        <Input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <Input
          required
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <Input
          required
          type="text"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Zarejestruj się</Button>
        {error && <p>{error}</p>}
        <Paragraph>
          Masz konto?{" "}
          <LinkButton onClick={loginPageTrygger}>Zaloguj się</LinkButton>
        </Paragraph>
      </Form>
    </Wrapper>
  );
};

export default Register;
