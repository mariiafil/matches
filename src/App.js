import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Nav } from './Nav';
import { Matches } from './components/pages/Matches';
import { Battles } from './components/pages/Battles';
import { Live } from './components/pages/Live';
import './styles/main.scss';

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route path="/matches" exact component={Matches} />
      <Route path="/battles" exact component={Battles} />
      <Route path="/matches/:matchId" exact component={Live} />
      <Route path="/battles/:battleId" exact component={Live} />
      <Redirect from="*" to="/matches" />
    </Switch>
  </div>
);

export default App;
