import React, { Component } from 'react';
import './App.css';
import MainContainer from './Containers/MainContainer'

import {Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact render={(props) => <MainContainer {...props}/>}/>
      </Switch>
    );
  }
}

export default App;
