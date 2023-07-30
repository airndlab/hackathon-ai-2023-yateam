import React, { useEffect } from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MainPage from './components/main-page/MainPage';
import PracticePage from './components/practice-page/PracticePage';
import LoginPage from './components/login-page/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchUser } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(reducer => reducer?.user);

  useEffect(() => {
    fetchCategories(dispatch);
    fetchUser(dispatch);
  }, [dispatch]);

  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route exact path="/">
            {user ? <MainPage /> : <Redirect to="/loginreact"/>}
          </Route>
          <Route exact path="/practices/:id">
            {user ? <PracticePage /> : <Redirect to="/loginreact"/>}
          </Route>
          <Route exact path="/loginreact" component={LoginPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
