const initialState = {
  paused: true,

  ended: false,

  dropDelay: 300, // ms

  linesCompleted: 0,
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

  case 'TOGGLE_PAUSE': {
    return {
      ...state,
      paused: !state.paused,
    }
  }

  case 'END_GAME': {
    console.log('END')
    return {
      ...state,
      ended: true,
    }
  }

  case 'INCREMENT_LINES_COMPLETED': {
    return {
      ...state,
      linesCompleted: state.linesCompleted + (action.n || 1),
    }
  }

  default:
    return state
  }

}

export default reducer
