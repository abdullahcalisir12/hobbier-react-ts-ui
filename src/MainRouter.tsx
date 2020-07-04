import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './core/Home';
import Events from './event/Events';

class MainRouter extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Events} />
        </Switch>
      </div>
    );
  }
}

export default MainRouter;
