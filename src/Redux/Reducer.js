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
  userToken: "",
  pokemons: [],
  trainer: {}
}

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INITIALIZE_TRAINER":
      return {...state, trainer: action.payload, userToken: "ab"};
    case "INITIALIZE_POKEMONS":
      return {...state, pokemons: action.payload}
    case "RESET_STATE":
      return initState
    default:
      return state;
  }
}
