import store from './store'

let lastDrop = Date.now()
let lastYPos = -1

export const loop = () => {
  const state = store.getState()
  const game = state.game
  let currentTetromino = state.tetrominoes.slice(-1)[0]

  const now = Date.now()
  const deltaTime = now - lastDrop

  if (!game.paused && deltaTime > game.dropDelay) {

    if (lastYPos === currentTetromino.y) {
      store.dispatch({ type: 'SET_TETROMINO', tetromino: currentTetromino })
      currentTetromino = document.newTetromino()
    }
    lastYPos = currentTetromino.y

    store.dispatch({ type: 'DROP_TETROMINO' })

    lastDrop = now;
  }

  if (!game.ended) {
    requestAnimationFrame(loop)
  }

}
