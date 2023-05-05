import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import MainPage from './components/main-page/MainPage';
import PracticePage from './components/practice-page/PracticePage';
import Header from './components/common/Header';
import LoginPage from './components/login-page/LoginPage';
import { useDispatch } from 'react-redux';
import { fetchCategories } from './redux/actions';
import Footer from './components/common/Footer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCategories(dispatch);
  }, [dispatch]);

  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <UserProvider>
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
