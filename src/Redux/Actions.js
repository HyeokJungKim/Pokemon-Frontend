import TrainerAdapter from "../Adapters/TrainerAdapter"

export const login = (id, token) => {
  return (dispatch) => {
    TrainerAdapter.initialize(id, token)
    .then(json => {
      if(json.error){
        dispatch(resetState())
      }else{
        dispatch(initializeTrainer(json.data.attributes))
        dispatch(initializePokemons(json.included.map(pokeball => pokeball.attributes.pokemon_information)))
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
        dispatch(toggleLoading(false))
      }else{
        dispatch(initializeToken(token))
        dispatch(toggleLoading(false))
        dispatch(initializeTrainer(json.data.attributes))
        dispatch(initializePokemons(json.included.map(pokeball => pokeball.attributes.pokemon_information)))
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

export const toggleLoading = (bool) => {
  return{
    type: "TOGGLE_LOADING",
    payload: bool
  }
}

export const resetState = () => {
  localStorage.clear()
  return{
    type: "RESET_STATE"
  }
}

export const getAllPokemons = (pokemonArr) => {
  return {
    type: "INITIALIZE_ALL",
    payload: pokemonArr
  }
}

export const getRandom = () => {
  return {
    type: "GET_RANDOM"
  }
}

export const runAway = () => {
  return {
    type: "RUN_AWAY"
  }
}

export const catchPokemon = (pokemon, token, experience) => {
  return (dispatch) => {
    TrainerAdapter.catchPokemon(pokemon, token, experience)
    .then(resp => {
      dispatch(addExperience(experience))
      dispatch(persistCatchedPokemon(resp.data.attributes.pokemon_information))
    })
  }
}

export const persistCatchedPokemon = (pokemon) => {
  return {
    type: "CATCH_POKEMON",
    payload: pokemon
  }
}

export const addExperience = (experience) => {
  return {
    type: "ADD_EXPERIENCE",
    payload: experience
  }
}
