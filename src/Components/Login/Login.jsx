import React, { useState } from "react";
import {toast } from "react-toastify"
import { useContext } from "react";
import {AuthContext} from "../../context/authContext";
import { Button, Form, Input, LinkButton, Paragraph, Title, User, Wrapper } from "./Login.styled";
import { UserIcon } from "../Images/Icons";
export const Login = ({loginPageTrygger}) => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      toast.success(`Witaj ${inputs.username}!`)
    } catch (err) {
      setError(err.response.data);
    }
    
  };

  return (
    <Wrapper>
        <User>{UserIcon}</User>
      <Title>Login</Title>
      <Form>
        <Input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Zaloguj</Button>
        {error && <p>{error}</p>}
        <Paragraph>
          Nie masz konta? <LinkButton onClick={loginPageTrygger}>Utwórz konto</LinkButton>
        </Paragraph>
      </Form>
    </Wrapper>
  );
};
