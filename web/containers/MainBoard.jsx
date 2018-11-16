// @flow

import React from 'react';
import {
  Route,
  Redirect,
  Switch,
} from 'react-router';
import { StyleRoot } from 'radium';

import LandingPage from './Landing/LandingPage.jsx';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  },
}

function MainBoard() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default MainBoard;
