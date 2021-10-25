import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { CounterApp } from './CounterApp';
import { Home } from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { grytebrod, havreflette } from './oppskrifter';
import OppskriftLang from './components/OppskriftLang';
import { routerPaths } from './router.path';

function App() {
  return (
    <Router>
    <div>
      <ul>
        <li key="a123">
          <Link to="/">Home</Link>
        </li>
        <li key="b456">
          <Link to={routerPaths.grytebrod}>Grytebrød</Link>
        </li>
        <li key="c789">
          <Link to={routerPaths.havreflette}>Havreflette</Link>
        </li>
      </ul>

      <hr />

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={routerPaths.grytebrod}>
          <OppskriftLang oppskrift={grytebrod} />
        </Route>
        <Route path={routerPaths.havreflette}>
          <OppskriftLang oppskrift={havreflette} />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
