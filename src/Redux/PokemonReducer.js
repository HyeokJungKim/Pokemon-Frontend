const initState = {
  all: [],
  displayedPokemon: {}
}

const pokemonReducer = (state = initState, action) => {
  switch (action.type) {
    case "INITIALIZE_ALL":
      return {...state, all: action.payload, displayedPokemon: {}}
    case "GET_RANDOM":
      const random = state.all[Math.floor(Math.random() * state.all.length)] || {}
      random.level = Math.floor(Math.random() * 50)
      return {...state, displayedPokemon: random}
    case "RUN_AWAY":
      return {...state, displayedPokemon: {}}
    case "CATCH_POKEMON":
      return {...state, displayedPokemon: {}}
    default:
      return state
  }
}

export default pokemonReducer
