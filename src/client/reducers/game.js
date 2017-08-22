
const initialState = {
  paused: true,

  ended: false,

  dropDelay: 1000, // ms
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'TOGGLE_PAUSE': {
      return {
        ...state,
        paused: !state.paused,
      }
    }

    case 'END': {
      return {
        ...state,
        ended: true,
      }
    }

    default:
      return state

  }

}

export default reducer
