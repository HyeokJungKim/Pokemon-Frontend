import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux'
import PokemonAdapter from './Adapters/PokemonAdapter'
import {persist, toggleLoading, getAllPokemons} from './Redux/Actions'

import HomeContainer from './Containers/HomeContainer'
import FormContainer from './Containers/FormContainer'
import GameContainer from './Containers/GameContainer'

import {Switch, Route, withRouter} from 'react-router-dom'
class App extends Component {

  componentDidMount() {
    PokemonAdapter.getAllPokemons()
    .then(resp=> {
      this.props.getAllPokemons(resp.data.map(pokemon => pokemon.attributes))
      if(localStorage.getItem('token')){
        this.props.persist(localStorage.getItem('token'))
      } else {
        this.props.toggleLoading(false)
      }
    })
  }

  render() {
    return (
      <Switch>
        <Route path='/login' render={(props) => <FormContainer {...props}/>}/>
        <Route path='/register' render={(props) => <FormContainer {...props}/>}/>
        <Route path='/home' render={(props) => <GameContainer {...props}/>}/>
        <Route path='/' exact render={(props) => <HomeContainer {...props}/>}/>
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return {userToken: state.auth.userToken}
}

export default withRouter(connect(mapStateToProps,{persist, toggleLoading, getAllPokemons})(App))
