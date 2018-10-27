const initState = []

const pokemonReducer = (state = initState, action) => {
  switch (action.type) {
    case "INITIALIZE_ALL":
      return action.payload
    default:
      return state
  }
}

export default pokemonReducer
