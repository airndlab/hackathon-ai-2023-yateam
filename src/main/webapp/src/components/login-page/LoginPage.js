import React, { useState } from 'react';
import TypingText from './TypingText';
import { Button, Container, Form, Input } from './styles/LoginPageStyles';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
      <Container>
        <TypingText username={username} />
        <Form className="login-form" action="/loginreact" method="POST">
          <Input
              name='username'
              type="text"
              placeholder="Логин"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
          />
          <Input
              name='password'
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
