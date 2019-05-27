import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import { Redirect, Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import Firebase, { FirebaseContext } from './components/Firebase/firebase';
import * as ROUTES from './constants/routes';
import './App.scss';

const customHistory = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={customHistory}>
      <Switch>
        <Route path={ROUTES.LOG_IN} component={Login}/>
        <Route path={ROUTES.HOME} component={Home}/>
        <Redirect from="/" to={ROUTES.LOG_IN} />
      </Switch>
    </Router>
  );
}

export default App;
