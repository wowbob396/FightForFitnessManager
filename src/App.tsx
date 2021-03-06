import React, { Component } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import { Redirect, Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import {createBrowserHistory} from "history"
import FirebaseApp from './components/Firebase/firebaseConfig';
import 'firebase/auth';
import './App.scss';
import { connect } from "react-redux";
import { fetchUser,  getAnnouncements } from './actions';
import PrivateRoute from './PrivateRoute';
import requireAuth from './components/Auth/requireAuth';
import { app } from 'firebase';

const customHistory = createBrowserHistory();

interface AppProps {
  fetchUser(): void;
  getAnnouncements(): void;
}

class App extends Component<AppProps,any> {

  componentWillMount() {
    this.props.fetchUser();
    this.props.getAnnouncements();
  }

  state = { loading: true, authenticated: false, currentUser: null };

  render() {

    // const { authenticated, loading } = this.state;

    // if (loading) {
    //   return <p>Loading..</p>;
    // }

    return (
      <Router history={customHistory}>
        <div>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={requireAuth(Home,customHistory)}/>
        </div>
      </Router>
    );
  }
}

export default connect(null, { fetchUser, getAnnouncements })(App);
