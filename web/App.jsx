// @flow

import React from 'react';
import { hot } from 'react-hot-loader';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import {
  Router,
  Switch,
} from 'react-router';
import debug from 'debug';
import MainBoard from './containers/MainBoard.jsx';

if (process.env.NODE_ENV !== 'production') {
  debug.enable('TripMap:*');
}

function App() {
  return (
    <MainBoard />
  );
}

export default hot(module)(App);
