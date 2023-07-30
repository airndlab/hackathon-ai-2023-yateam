import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MainPage from './components/main-page/MainPage';
import PracticePage from './components/practice-page/PracticePage';
import LoginPage from './components/login-page/LoginPage';
import { useDispatch } from 'react-redux';
import { fetchCategories, fetchUser } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCategories(dispatch);
    fetchUser(dispatch);
  }, [dispatch]);

  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/practices/:id" component={PracticePage} />
          <Route exact path="/loginreact" component={LoginPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
