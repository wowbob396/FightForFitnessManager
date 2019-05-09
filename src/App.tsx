import React from 'react';
import Login from './components/Login';
import { Redirect, Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import './App.scss';

const customHistory = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={customHistory}>
      <Switch>
        <Route path="/login" component={Login}/>
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
