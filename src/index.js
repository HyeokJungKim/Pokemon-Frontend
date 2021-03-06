import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

import { BrowserRouter as Router} from 'react-router-dom'

import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import trainerReducer from './Redux/TrainerReducer'
import authReducer from './Redux/AuthReducer'
import pokemonReducer from './Redux/PokemonReducer'

const rootReducer = combineReducers({trainer: trainerReducer, auth: authReducer, pokemons: pokemonReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
