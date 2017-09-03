import { randomTetromino } from '../socket'

export const ADD_TETROMINO = 'ADD_TETROMINO'

export const addTetromino = () => {
  return {
    type: ADD_TETROMINO,
    tetromino: randomTetromino()
  }
}


export const DROP_TETROMINO = 'DROP_TETROMINO'

export const dropTetromino = () => {
  return {
    type: DROP_TETROMINO
  }
}


export const MOVE_LEFT_TETROMINO = 'MOVE_LEFT_TETROMINO'

export const moveLeftTetromino = () => {
  return {
    type: MOVE_LEFT_TETROMINO
  }
}


export const MOVE_RIGHT_TETROMINO = 'MOVE_RIGHT_TETROMINO'

export const moveRightTetromino = () => {
  return {
    type: MOVE_RIGHT_TETROMINO
  }
}


export const ROTATE_TETROMINO = 'ROTATE_TETROMINO'

export const rotateTetromino = () => {
  return {
    type: ROTATE_TETROMINO
  }
}
