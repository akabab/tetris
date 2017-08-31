import store from './store'

let lastDrop = Date.now()

export const loop = () => {
  const state = store.getState()
  const game = state.game

  const now = Date.now()
  const deltaTime = now - lastDrop

  if (!game.paused && deltaTime > game.dropDelay) {

    store.dispatch({ type: 'DROP_TETROMINO' })

    lastDrop = now
  }

  if (!game.ended) {
    requestAnimationFrame(loop)
  }

}
