const initState = {
  all: []
}

const itemReducer = (state = initState, action) => {
  switch (action.type) {
    case "INITIALIZE_ITEMS":
      return {...state, all: action.payload}
    default:
      return state
  }
}

export default itemReducer
