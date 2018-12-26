//IF YOU WANT TO MAKE FETCH WITHIN ACTIONS, USE THUNK
// yarn add redux-thunk OR npm add redux-thunk
// After thunk is installed
// import applyMiddleware from redux (where you created store) and import thunk from 'redux-thunk'
// applyMiddleware(thunk) as second argument
// In the action, return a function with dispatch* as the first parameter
// Then within the function body, make the fetch request and dispatch* the object, which will hit the reducer



// import combineReducer from redux
// combineReducer takes an object as a parameter
// combine `const RootReducer = ({ hobbitState: hobbitReducer, hogState: hogReducer })`
// createStore(RootReducer)
// RootReducer.getState() = hobbitState: {//STATE OF HOBBIT}

const initState = {
  pokemons: [],
  trainer: {},
}

const trainerReducer = (state = initState, action) => {
  switch (action.type) {
    case "INITIALIZE_TRAINER":
      return {...state, trainer: action.payload}
    case "ADD_EXPERIENCE":
      const addedEXP = state.pokemons.map((pokemon) => {
        return (pokemon.experience + action.payload) > (pokemon.level * 25)
          ?
          {...pokemon, level: pokemon.level + 1, experience: 0}
        :
          {...pokemon, experience: pokemon.experience + action.payload}
      })
      return {...state, pokemons: addedEXP}
    case "INITIALIZE_POKEMONS":
      return {...state, pokemons: action.payload}
    case "RESET_STATE":
      return initState
    case "CATCH_POKEMON":
      const pokemonArr = [...state.pokemons, action.payload]
      return {...state, pokemons: pokemonArr}
    default:
      return state
  }
}

export default trainerReducer
