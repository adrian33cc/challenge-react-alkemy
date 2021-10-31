import React from 'react'

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Heroe from './pages/Heroe';
import HeroesState from './context/heroes/heroesState';
import MyTeam from './pages/MyTeam';

function App() {
  return (

    <HeroesState>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/myteam" component={MyTeam} />
          <Route exact path="/:name" component={Heroe} />
        </Switch>
      </Router>
    </HeroesState>
    
  );
}

export default App;
