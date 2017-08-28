import store from './store'

let lastDrop = Date.now()

export const loop = () => {
  const game = store.getState().game
  let currentTetromino

  const now = Date.now()
  const deltaTime = now - lastDrop

  if (!game.paused && deltaTime > game.dropDelay) {
    currentTetromino = store.getState().tetrominoes.slice(-1)[0]
    store.dispatch({type: 'UNSET_TETROMINO', tetromino: currentTetromino})

    store.dispatch({ type: 'DROP_TETROMINO' })

    currentTetromino = store.getState().tetrominoes.slice(-1)[0]
    store.dispatch({type: 'SET_TETROMINO', tetromino: currentTetromino})

    lastDrop = now;
  }

  if (!game.ended) {
    requestAnimationFrame(loop)
  }

}
