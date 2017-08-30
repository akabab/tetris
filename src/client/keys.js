import store from './store'

const SPACE = 32
const LEFT  = 37
const UP    = 38
const RIGHT = 39
const DOWN  = 40

document.body.addEventListener('keydown', e => {

  const game = store.getState().game

  switch (e.keyCode) {
    case LEFT:
      if (!game.paused)
        store.dispatch({ type: 'MOVE_LEFT_TETROMINO' })
      break

    case UP:
      if (!game.paused)
        store.dispatch({ type: 'ROTATE_TETROMINO' })
      break

    case RIGHT:
      if (!game.paused)
        store.dispatch({ type: 'MOVE_RIGHT_TETROMINO' })
      break

    case DOWN:
      if (!game.paused)
        store.dispatch({ type: 'DROP_TETROMINO' })
      break

    case SPACE:
      store.dispatch({ type: 'TOGGLE_PAUSE' })
      break

  }

}, false)
