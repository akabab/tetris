export const ADD_TETROMINO = 'ADD_TETROMINO'

export const addTetromino = (tetromino) => {
  return {
    ...tetromino,
    type: ADD_TETROMINO
  }
}
