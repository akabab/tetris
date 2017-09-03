import store from './store'

const SPACE = 32
const LEFT  = 37
const UP    = 38
const RIGHT = 39
const DOWN  = 40
const R     = 82

document.body.addEventListener('keydown', e => {

  const game = store.getState().game

  switch (e.keyCode) {

  case LEFT:
    e.preventDefault()
    if (!game.paused && !game.ended)
      store.dispatch({ type: 'MOVE_LEFT_TETROMINO' })
    break

  case UP:
    e.preventDefault()
    if (!game.paused && !game.ended)
      store.dispatch({ type: 'ROTATE_TETROMINO' })
    break

  case RIGHT:
    e.preventDefault()
    if (!game.paused && !game.ended)
      store.dispatch({ type: 'MOVE_RIGHT_TETROMINO' })
    break

  case DOWN:
    e.preventDefault()
    if (!game.paused && !game.ended)
      store.dispatch({ type: 'DROP_TETROMINO' })
    break

  case SPACE:
    e.preventDefault()
    store.dispatch({ type: 'TOGGLE_PAUSE' })
    break

  case R:
    window.location = window.location
    break
  }

}, false)
