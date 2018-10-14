import TrainerAdapter from "../Adapters/TrainerAdapter"

export const login = (data) => {
  return (dispatch) => {
    TrainerAdapter.login(data)
    .then(json => {
      const pokemons = json.included.map((pokemon) => {
        return pokemon.attributes
      })
      dispatch(initializeTrainer(json.data.attributes))
      dispatch(initializePokemons(pokemons))
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

export const resetState = () => {
  return{
    type: "RESET_STATE"
  }
}
