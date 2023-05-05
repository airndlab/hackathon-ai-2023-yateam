import React, { useState } from 'react';
import TypingText from './TypingText';
import { Button, Container, Form, Input } from './styles/LoginPageStyles';
import Header from '../common/Header';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const details = {
      username, password,
    };

    const formBody = [];
    for (let property in details) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }

    fetch(`/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody.join('&'),
      redirect: 'manual',
    })
        .then(response => {
          console.debug(response);
        })
        .catch(error => {
          console.error(error);
          //TODO: handle login error
        });
  };

  return (
      <>
        <Header />
        <Container>
          <TypingText username={username} />
          <Form className="login-form" action="/login" method="POST">
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
      </>
  );
};

export default LoginPage;
