import { addTetromino } from '../actions/tetromino'
import { game } from '../constants'
import _ from 'lodash'

const initialState = Array(game.size.y).fill(0)
  .map(e => Array(game.size.x).fill(0))

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'SET_TETROMINO': {
      const t = action.tetromino
      const pattern = t.patterns[t.patternIndex]

      if (t.y < 0) {
        action.asyncDispatch({type: 'END_GAME'})

        return state
      }

      const board = _.cloneDeep(state)

      for (let y = 0; y < pattern.length; y++) {
        for (let x = 0; x < pattern[0].length; x++) {
          if (pattern[y][x])
            board[t.y + y][t.x + x] = t.letter
        }
      }

      action.asyncDispatch({type: 'CHECK_COMPLETED_LINES'})

      action.asyncDispatch(addTetromino())

      return board
    }

    case 'UNSET_TETROMINO': {
      const board = _.cloneDeep(state)
      const t = action.tetromino
      const pattern = t.patterns[t.patternIndex]

      for (let y = 0; y < pattern.length; y++) {
        for (let x = 0; x < pattern[0].length; x++) {
          if (pattern[y][x])
            board[t.y + y][t.x + x] = 0
        }
      }

      return board
    }

    case 'CHECK_COMPLETED_LINES': {

      let board = _.cloneDeep(state)
      let lines = 0

      for (let y = 0; y < game.size.y; y++) {
        const line = board[y]

        if (line.every(e => e != 0)) {
          console.log(`line ${y} completed`)

          board = [
            Array(game.size.x).fill(0),
            ...board.slice(0, y),
            ...board.slice(y + 1)
          ]

          lines += 1
        }
      }

      action.asyncDispatch({type: 'INCREMENT_LINES_COMPLETED', n: lines})

      return board
    }

    default:
      return state
  }

}

export default reducer
