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

  componentWillMount() {
    firebaseAppAuth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
          currentUser: user
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
          currentUser: null
        });
      }
    });
  }

  state = { loading: true, authenticated: false, user: null };

  render() {

    const { authenticated, loading } = this.state;

    if (loading) {
      return <p>Loading..</p>;
    }

    return (
      <Router history={customHistory}>
        <div>
          <PrivateRoute
            exact
            path="/"
            component={Home}
            authenticated={authenticated}
          />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
