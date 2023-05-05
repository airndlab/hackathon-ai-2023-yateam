import React, { useState } from 'react';
import TypingText from "./TypingText";
import {Button, Container, Form, Input} from "./styles/LoginPageStyles";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Обработка данных формы, проверка входа и т.д.
  };

  return (
    <Container>
      <TypingText username={username} />
      <Form className="login-form" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">
           Войти
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
