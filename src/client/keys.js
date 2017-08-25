import store from './store'

const SPACE = 32
const LEFT  = 37
const UP    = 38
const RIGHT = 39
const DOWN  = 40

document.body.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case LEFT:
      store.dispatch({ type: 'MOVE_LEFT_TETROMINO' })
      break

    case UP:
      store.dispatch({ type: 'ROTATE_TETROMINO' })
      break

    case RIGHT:
      store.dispatch({ type: 'MOVE_RIGHT_TETROMINO' })
      break

    case DOWN:
      store.dispatch({ type: 'DROP_TETROMINO' })
      break

    case SPACE:
      store.dispatch({ type: 'TOGGLE_PAUSE' })
      break

  }
}, false)
