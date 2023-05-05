import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import MainPage from './components/main-page/MainPage';
import PracticePage from './components/practice-page/PracticePage';
import Header from './components/header/Header';
import LoginPage from './components/login-page/LoginPage';

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <UserProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/practices/:id" component={PracticePage} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </UserProvider>
      </BrowserRouter>
  );
}

export default App;
