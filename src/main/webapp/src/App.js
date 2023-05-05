import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserContextProvider } from './contexts/UserContext';
import MainPage from './components/main-page/MainPage';
import LoginPage from "./components/login-page/LoginPage";

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <UserContextProvider>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </UserContextProvider>
      </BrowserRouter>
  );
}

export default App;
