export const LOCK_TETROMINO = 'LOCK_TETROMINO'

export const lockTetromino = tetromino => {
  return {
    type: LOCK_TETROMINO,
    tetromino
  }
}


export const CHECK_COMPLETED_LINES = 'CHECK_COMPLETED_LINES'

export const checkCompletedLines = () => {
  return {
    type: CHECK_COMPLETED_LINES
  }
}
