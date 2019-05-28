import React, { Component } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import { Redirect, Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import FirebaseApp from './components/Firebase/firebaseConfig';
import 'firebase/auth';
import './App.scss';
import PrivateRoute from './PrivateRoute';

const customHistory = createBrowserHistory();
const firebaseAppAuth = FirebaseApp.auth();


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
