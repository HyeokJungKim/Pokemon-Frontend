import TrainerAdapter from "../Adapters/TrainerAdapter"

export const login = (id, token) => {
  return (dispatch) => {
    TrainerAdapter.initialize(id, token)
    .then(json => {
      if(json.error){
        dispatch(resetState())
      }else{
        dispatch(initializeTrainer(json.data.attributes))
        dispatch(initializePokemons(json.included.map(pokemon => pokemon.attributes)))
      }
    })
  }
}

export const persist = (token) => {
  return (dispatch) => {
    TrainerAdapter.persist(token)
    .then(json => {
      if(json.error){
        dispatch(resetState())
      }else{
        dispatch(initializeToken(token))
        dispatch(initializeTrainer(json.data.attributes))
        dispatch(initializePokemons(json.included.map(pokemon => pokemon.attributes)))
        dispatch(toggleLoading())
      }
    })
  }
}

export const initializeTrainer = (trainer) => {
  return {
    type: "INITIALIZE_TRAINER",
    payload: trainer
  }
}

export const initializePokemons = (pokemons) => {
  return {
    type: "INITIALIZE_POKEMONS",
    payload: pokemons
  }
}

export const initializeToken = (token) => {
  return {
    type: "INITIALIZE_TOKEN",
    payload: token
  }
}

export const toggleLoading = () => {
  return{
    type: "TOGGLE_LOADING"
  }
}

export const resetState = () => {
  localStorage.clear()
  return{
    type: "RESET_STATE"
  }
}
