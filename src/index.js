import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <HashRouter basename="/matches_and_battles">
    <Route component={App} />
  </HashRouter>,
  document.getElementById('root'),
);
