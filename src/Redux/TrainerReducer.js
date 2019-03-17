const initState = {
  pokemonTeam: [],
  pokemonBox : [],
  trainer: {},
  items: []
}

const trainerReducer = (state = initState, action) => {
  switch (action.type) {
    case "INITIALIZE_TRAINER":
      return {...state, trainer: action.payload}
    case "ADD_EXPERIENCE":
      const addedEXP = state.pokemonTeam.map((pokemon) => {
        return (pokemon.experience + action.payload) > (pokemon.level * 25)
          ?
          {...pokemon, level: pokemon.level + 1, experience: 0}
        :
          {...pokemon, experience: pokemon.experience + action.payload}
      })
      return {...state, pokemonTeam: addedEXP}
    case "INITIALIZE_POKEMON_TEAM":
      return {...state, pokemonTeam: action.payload}
    case "INITIALIZE_POKEMON_BOX":
      return {...state, pokemonBox: action.payload}
    case "RESET_STATE":
      return initState
    case "CATCH_POKEMON":
      if (state.pokemonTeam.length >= 6) {
        return {...state, pokemonBox: [...state.pokemonBox, action.payload]}
      } else {
        return {...state, pokemonTeam: [...state.pokemonTeam, action.payload]}
      }
    case "EVOLVE_POKEMON":
      if (action.payload.onTeam) {
        return {...state, pokemonTeam: state.pokemonTeam.map(pokemon =>{
          return (
            pokemon.id === action.payload.id
              ?
              action.payload
              :
              pokemon
          )
        })}
      } else {
        return {...state, pokemonBox: state.pokemonBox.map(pokemon =>{
          return (
            pokemon.id === action.payload.id
              ?
              action.payload
              :
              pokemon
          )
        })}
      }

    case "INITIALIZE_ITEMS":
      return {...state, items: action.payload}
    default:
      return state
  }
}

export default trainerReducer
