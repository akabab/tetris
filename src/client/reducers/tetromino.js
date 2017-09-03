import {
  ADD_TETROMINO,
  MOVE_LEFT_TETROMINO,
  MOVE_RIGHT_TETROMINO,
  DROP_TETROMINO,
  ROTATE_TETROMINO,
} from '../actions/tetromino'

import {
  lockTetromino,
} from '../actions/board'

import collides from '../collides'

const reducer = (state = [], action) => {

  const currentTetromino = state.slice(-1)[0]

  switch (action.type) {

  case ADD_TETROMINO: {
    return [
      ...state,
      action.tetromino,
    ]
  }

  case MOVE_LEFT_TETROMINO: {
    if (!currentTetromino) {
      return state
    }

    const t = {
      ...currentTetromino,
      x: currentTetromino.x - 1,
    }

    if (collides(t))
      return state

    return [
      ...state.slice(0, -1),
      t
    ]
  }

  case MOVE_RIGHT_TETROMINO: {
    if (!currentTetromino) {
      return state
    }

    const t = {
      ...currentTetromino,
      x: currentTetromino.x + 1,
    }

    if (collides(t))
      return state

    return [
      ...state.slice(0, -1),
      t
    ]
  }

  case DROP_TETROMINO: {
    if (!currentTetromino) {
      return state
    }

    const t = {
      ...currentTetromino,
      y: currentTetromino.y + 1,
    }

    if (collides(t)) {
      action.asyncDispatch(lockTetromino(currentTetromino))
      return state
    }

    return [
      ...state.slice(0, -1),
      t
    ]
  }

  case ROTATE_TETROMINO: {
    if (!currentTetromino) {
      return state
    }

    const t = {
      ...currentTetromino,
      patternIndex: (currentTetromino.patternIndex + 1) % currentTetromino.patterns.length,
    }

    if (collides(t))
      return state

    return [
      ...state.slice(0, -1),
      t
    ]
  }

  default:
    return state
  }
}

export default reducer
