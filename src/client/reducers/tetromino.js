import { ADD_TETROMINO } from '../actions/tetromino'

const reducer = (state = [], action) => {
  switch (action.type) {

    case ADD_TETROMINO: {
      return [
        ...state,
        {
          patterns: action.patterns,
          currentPatternIndex: action.currentPatternIndex,
          pos: action.pos
        }
      ]
    }

    case 'MOVE_LEFT_TETROMINO': {
      const last = state.slice(-1)[0]

      if (!last) {
        return state
      }

      return [
        ...state.slice(0, -1),
        {
          ...last,
          pos: {
            x: last.pos.x - 1,
            y: last.pos.y,
          }
        }
      ]
    }

    case 'MOVE_RIGHT_TETROMINO': {
      const last = state.slice(-1)[0]

      if (!last) {
        return state
      }

      return [
        ...state.slice(0, -1),
        {
          ...last,
          pos: {
            x: last.pos.x + 1,
            y: last.pos.y,
          }
        }
      ]
    }

    case 'DROP_TETROMINO': {
      const last = state.slice(-1)[0]

      if (!last) {
        return state
      }

      return [
        ...state.slice(0, -1),
        {
          ...last,
          pos: {
            x: last.pos.x,
            y: last.pos.y + 1,
          }
        }
      ]
    }

    case 'ROTATE_TETROMINO': {
      const last = state.slice(-1)[0]

      if (!last) {
        return state
      }

      return [
        ...state.slice(0, -1),
        {
          ...last,
          currentPatternIndex: (last.currentPatternIndex + 1) % last.patterns.length,
        }
      ]
    }

    default:
      return state
  }
}

export default reducer
