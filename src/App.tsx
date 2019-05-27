import React, { Component } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import { Redirect, Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import FiresbaseConfig from './components/Firebase/firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
import app from 'firebase/app';
import 'firebase/auth';
import * as ROUTES from './constants/routes';
import './App.scss';
import FirebaseConfig from './components/Firebase/firebaseConfig';
import PrivateRoute from './PrivateRoute';

const customHistory = createBrowserHistory();

const firebaseApp = app.initializeApp(FirebaseConfig);

const firebaseAppAuth = firebaseApp.auth();


class App extends Component {

  state = { loading: true, authenticated: false, user: null };

  render() {

    const { authenticated, loading } = this.state;
    return (
      <Router history={customHistory}>
        <Switch>

          <PrivateRoute exact path="/" component={Home} authenticated={this.state.authenticated} />
          <Route path={ROUTES.HOME} component={Home}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
