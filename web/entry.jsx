// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import debug from 'debug';

import App from './App.jsx';

const debugInitial = debug('TripMap:Initial');

ReactDOM.render(<App />, document.getElementById('root'));
