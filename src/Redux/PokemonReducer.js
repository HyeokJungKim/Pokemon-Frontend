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
      return {...state, displayedPokemon: random}
    default:
      return state
  }
}

export default pokemonReducer
