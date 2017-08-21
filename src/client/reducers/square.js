import { MOVE_LEFT, MOVE_UP, MOVE_RIGHT, MOVE_DOWN } from '../actions/square'

const params = require('../../../params')

const w = params.game.size.width
const x = Math.floor(Math.random() * w)

const reducer = (state = { x: x, y: 0 } , action) => {
  switch (action.type) {
  case MOVE_LEFT:  return { ...state, x: state.x - 1 }
  case MOVE_UP:    return { ...state, y: state.y - 1 }
  case MOVE_RIGHT: return { ...state, x: state.x + 1 }
  case MOVE_DOWN:  return { ...state, y: state.y + 1 }
  default:         return state
  }
}

export default reducer
