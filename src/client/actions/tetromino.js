import { randomTetromino } from '../socket'

export const ADD_TETROMINO = 'ADD_TETROMINO'

export const addTetromino = () => {
  return {
    type: ADD_TETROMINO,
    tetromino: randomTetromino(),
  }
}
