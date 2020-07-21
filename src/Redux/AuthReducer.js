const initState = {
  userToken: "",
  loading: true
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "INITIALIZE_TOKEN":
      return {...state, userToken: action.payload}
    case "TOGGLE_LOADING":
      return {...state, loading: action.payload}
    case "RESET_STATE":
      return {...initState, loading: false}
    default:
      return state
  }
}

export default authReducer
