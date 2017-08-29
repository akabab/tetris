import { game } from '../constants'
import _ from 'lodash'

const initialState = Array(game.size.y).fill(0)
  .map(e => Array(game.size.x).fill(0))

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'SET_TETROMINO': {
      const board = _.cloneDeep(state)
      const t = action.tetromino
      const pattern = t.patterns[t.currentPatternIndex]

      for (let y = 0; y < pattern.length; y++) {
        for (let x = 0; x < pattern[0].length; x++) {
          if (pattern[y][x])
            board[t.y + y][t.x + x] = 1
        }
      }

      console.log(board)
      return board
    }

    case 'UNSET_TETROMINO':{
        const board = _.cloneDeep(state)
        const t = action.tetromino
        const pattern = t.patterns[t.currentPatternIndex]

        for (let y = 0; y < pattern.length; y++) {
          for (let x = 0; x < pattern[0].length; x++) {
            if (pattern[y][x])
              board[t.y + y][t.x + x] = 0
          }
        }

        return board
    }

    default:
      return state
  }

}

export default reducer
