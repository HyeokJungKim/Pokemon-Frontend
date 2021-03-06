import TrainerAdapter from "../Adapters/TrainerAdapter"
import PokemonAdapter from "../Adapters/PokemonAdapter"
import ItemAdapter from "../Adapters/ItemAdapter"

export const initializePokemons = () => {
  return (dispatch) => {
    PokemonAdapter.getAllPokemons()
    .then(json=> {
      dispatch(getAllPokemons(json.data.map(pokemon => pokemon.attributes)))
      if(localStorage.getItem('token')){
        dispatch(persist(localStorage.getItem('token')))
      } else {
        dispatch(toggleLoading(false))
      }
    })
  }
}

export const movePokemon = (pokemonId, position, moveAcrossBoolean) => {
  return (dispatch, getState) => {
    let {auth} = getState()
    let token = auth.userToken
    TrainerAdapter.movePokemon(pokemonId, position, token, moveAcrossBoolean)
    .then(json => {
      if(json.error){
        dispatch(resetState())
      } else {
        const pokemons = json.included.map(pokeball => pokeball.attributes.pokemon_information)
        dispatch(initializePokemonTeam(pokemons.filter(pokemon => pokemon.onTeam)))
        dispatch(initializePokemonBox(pokemons.filter(pokemon => !pokemon.onTeam)))
      }
    })
  }
}

export const login = (id, token) => {
  return (dispatch) => {
    TrainerAdapter.initialize(id, token)
    .then(json => {
      if(json.error){
        dispatch(resetState())
      }else{
        dispatch(initializeTrainer(json.data.attributes))
        const pokemons = json.included.map(pokeball => pokeball.attributes.pokemon_information).filter(Boolean)
        const items = json.included.map(item => item.attributes.inventory_information).filter(Boolean)
        dispatch(initializePokemonTeam(pokemons.filter(pokemon => pokemon.onTeam)))
        dispatch(initializePokemonBox(pokemons.filter(pokemon => !pokemon.onTeam)))
        dispatch(saveItems(items))
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
        const pokemons = json.included.map(pokeball => pokeball.attributes.pokemon_information).filter(Boolean)
        const items = json.included.map(item => item.attributes.inventory_information).filter(Boolean)
        dispatch(initializePokemonTeam(pokemons.filter(pokemon => pokemon.onTeam)))
        dispatch(initializePokemonBox(pokemons.filter(pokemon => !pokemon.onTeam)))
        dispatch(saveItems(items))
      }
    })
  }
}

export const evolvePokemon = (id) => {
  return (dispatch, getState) => {
    let {auth} = getState()
    let token = auth.userToken
    TrainerAdapter.evolvePokemon(id, token)
    .then(json => {
      if (json.error) {
        dispatch(resetState())
      } else{
        dispatch(savePokemonFrontEnd(json.data.attributes.pokemon_information))
      }
    })
  }
}

export const stoneEvolve = (id, evolution_id) => {
  return (dispatch, getState) => {
    let {auth} = getState()
    let token = auth.userToken
    TrainerAdapter.stoneEvolve(id, evolution_id, token)
    .then((json) => {
      if (json.error) {
        dispatch(resetState())
      } else{
        dispatch(initializeTrainer(json.data.attributes))
        const pokemons = json.included.map(pokeball => pokeball.attributes.pokemon_information).filter(Boolean)
        const items = json.included.map(item => item.attributes.inventory_information).filter(Boolean)
        dispatch(initializePokemonTeam(pokemons.filter(pokemon => pokemon.onTeam)))
        dispatch(initializePokemonBox(pokemons.filter(pokemon => !pokemon.onTeam)))
        dispatch(saveItems(items))
      }
    })
  }
}

export const buyItems = (itemsArray) => {
  return (dispatch, getState) => {
    let {auth} = getState()
    let token = auth.userToken
    ItemAdapter.buyItems(token, itemsArray)
    .then(json => {
      if (json.error) {
        dispatch(resetState())
      } else {
        let items = json.included.map(item => item.attributes.inventory_information).filter(Boolean)
        dispatch(initializeTrainer(json.data.attributes))
        dispatch(saveItems(items))
      }
    })
  }
}

export const patchPokeball = (ballId) => {
  return (dispatch, getState) => {
    let {auth} = getState()
    let token = auth.userToken
    ItemAdapter.useBall(token, ballId)
    .then(json => dispatch(useBall(json.id)))
  }
}

export const patchExperience = (experience, money) => {
  return (dispatch, getState) => {
    let {auth} = getState()
    let token = auth.userToken
    TrainerAdapter.addExperience(experience, money, token)
    .then((resp) => {
      dispatch(addExperience(experience))
      dispatch(increaseMoney(money))
      setTimeout(() => {dispatch(runAway())}, 2000)
    })
  }

}

export const savePokemonFrontEnd = (pokemon) => {
  return {
    type: "EVOLVE_POKEMON",
    payload: pokemon
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

const saveItems = (itemsArr) => {
  return {
    type: "INITIALIZE_ITEMS",
    payload: itemsArr
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

export const catchPokemon = (pokemon, experience, ballId, canFitOnTeam, money) => {
  return (dispatch, getState) => {
    let {auth} = getState()
    let token = auth.userToken
    TrainerAdapter.catchPokemon(pokemon, token, experience, ballId, canFitOnTeam, money)
    .then(json => {
      if (json.error) {
        dispatch(resetState())
      } else {
        dispatch(addExperience(experience))
        dispatch(useBall(ballId))
        dispatch(increaseMoney(money))
        setTimeout(() => dispatch(catchPokemonFrontEnd(json.data.attributes.pokemon_information)), 2000)
      }
    })
  }
}

export const catchPokemonFrontEnd = (pokemon) => {
  return {
    type: "CATCH_POKEMON",
    payload: pokemon
  }
}

export const useBall = (ballId) => {
  return {
    type: "USE_BALL",
    payload: ballId
  }
}

export const increaseMoney = (money) => {
  return {
    type: "INCREASE_MONEY",
    payload: money
  }
}

export const addExperience = (experience) => {
  return {
    type: "ADD_EXPERIENCE",
    payload: experience
  }
}
