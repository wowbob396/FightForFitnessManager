import React from 'react';
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

const customHistory = createBrowserHistory();

const firebaseApp = app.initializeApp(FirebaseConfig);

const firebaseAppAuth = firebaseApp.auth();


const App: React.FC = () => {
  return (
    <Router history={customHistory}>
      <Switch>
        <Route path={ROUTES.LOG_IN} render={() => <Login auth={firebaseAppAuth} />}/>
        <Route path={ROUTES.HOME} component={Home}/>
        <Redirect from="/" to={ROUTES.LOG_IN} />
      </Switch>
    </Router>
  );
}

export default withFirebaseAuth({firebaseAppAuth})(App);
