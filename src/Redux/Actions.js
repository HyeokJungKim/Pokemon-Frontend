import TrainerAdapter from "../Adapters/TrainerAdapter"

export const login = (id, token) => {
  return (dispatch) => {
    TrainerAdapter.initialize(id, token)
    .then(json => {
      if(json.error){
        dispatch(resetState())
      }else{
        dispatch(initializeTrainer(json.data.attributes))
        const pokemons = json.included.map(pokeball => pokeball.attributes.pokemon_information)
        dispatch(initializePokemonTeam(pokemons.filter(pokemon => pokemon.onTeam)))
        dispatch(initializePokemonBox(pokemons.filter(pokemon => !pokemon.onTeam)))
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
        const pokemons = json.included.map(pokeball => pokeball.attributes.pokemon_information)
        dispatch(initializePokemonTeam(pokemons.filter(pokemon => pokemon.onTeam)))
        dispatch(initializePokemonBox(pokemons.filter(pokemon => !pokemon.onTeam)))
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

export const initializePokemonTeam = (pokemons) => {
  return {
    type: "INITIALIZE_POKEMON_TEAM",
    payload: pokemons
  }
}

export const initializePokemonBox = (pokemons) => {
  return {
    type: "INITIALIZE_POKEMON_BOX",
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

export const catchPokemon = (pokemon, token, experience, canFitOnTeam) => {
  return (dispatch) => {
    TrainerAdapter.catchPokemon(pokemon, token, experience, canFitOnTeam)
    .then(resp => {
      dispatch(addExperience(experience))
      setTimeout(() => dispatch(persistCatchedPokemon(resp.data.attributes.pokemon_information)), 1500)
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
