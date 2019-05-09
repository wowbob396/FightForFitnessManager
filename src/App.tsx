import React from 'react';
import Login from './components/Login';
import { Redirect, Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
