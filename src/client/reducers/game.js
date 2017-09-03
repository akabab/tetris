import {
  TOGGLE_PAUSE,
  END_GAME,
  INCREMENT_COMPLETED_LINES,
} from '../actions/game'

const initialState = {
  paused: true,

  ended: false,

  dropDelay: 300, // ms

  completedLines: 0,
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

  case TOGGLE_PAUSE: {
    return {
      ...state,
      paused: !state.paused,
    }
  }

  case END_GAME: {
    return {
      ...state,
      ended: true,
    }
  }

  case INCREMENT_COMPLETED_LINES: {
    return {
      ...state,
      completedLines: state.completedLines + (action.n || 1),
    }
  }

  default:
    return state
  }

}

export default reducer
