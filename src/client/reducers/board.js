import {
  addTetromino,
} from '../actions/tetromino'

import {
  LOCK_TETROMINO,
  CHECK_COMPLETED_LINES,
  checkCompletedLines,
} from '../actions/board'

import {
  endGame,
  incrementCompletedLines,
} from '../actions/game'

import { game } from '../constants'
import _ from 'lodash'

const initialState = Array(game.size.y).fill(0)
  .map(() => Array(game.size.x).fill(0))

const reducer = (state = initialState, action) => {

  switch (action.type) {

  case LOCK_TETROMINO: {
    const t = action.tetromino
    const pattern = t.patterns[t.patternIndex]

    if (t.y < 0) {
      action.asyncDispatch(endGame())

      return state
    }

    const board = _.cloneDeep(state)

    for (let y = 0; y < pattern.length; y++) {
      for (let x = 0; x < pattern[0].length; x++) {
        if (pattern[y][x])
          board[t.y + y][t.x + x] = t.letter
      }
    }

    action.asyncDispatch(checkCompletedLines())

    action.asyncDispatch(addTetromino())

    return board
  }

  case CHECK_COMPLETED_LINES: {
    let board = _.cloneDeep(state)
    let completedLines = 0

    for (let y = 0; y < game.size.y; y++) {
      const line = board[y]

      if (line.every(e => e != 0)) {
        board = [
          Array(game.size.x).fill(0),
          ...board.slice(0, y),
          ...board.slice(y + 1)
        ]

        completedLines += 1
      }
    }

    if (!completedLines)
      return state

    action.asyncDispatch(incrementCompletedLines(completedLines))

    return board
  }

  default:
    return state
  }

}

export default reducer
