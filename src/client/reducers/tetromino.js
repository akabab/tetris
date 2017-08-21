import { ADD_TETROMINO } from '../actions/tetromino'

const reducer = (state = [], action) => {
  switch (action.type) {

  case ADD_TETROMINO:
    return [
      ...state,
      {
        pattern: action.pattern,
        pos: action.pos
      }
    ]

  default:
    return state
  }
}

export default reducer
