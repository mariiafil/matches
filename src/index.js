import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter basename="/matches_and_battles/">
    <Route component={App} />
  </BrowserRouter>,
  document.getElementById('root'),
);
