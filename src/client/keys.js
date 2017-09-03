import {
  moveLeftTetromino,
  moveRightTetromino,
  dropTetromino,
  rotateTetromino,
} from './actions/tetromino'

import {
  togglePause,
} from './actions/game'

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
      store.dispatch(moveLeftTetromino())
    break

  case UP:
    e.preventDefault()
    if (!game.paused && !game.ended)
      store.dispatch(rotateTetromino())
    break

  case RIGHT:
    e.preventDefault()
    if (!game.paused && !game.ended)
      store.dispatch(moveRightTetromino())
    break

  case DOWN:
    e.preventDefault()
    if (!game.paused && !game.ended)
      store.dispatch(dropTetromino())
    break

  case SPACE:
    e.preventDefault()
    store.dispatch(togglePause())
    break

  case R:
    window.location.reload(true)
    break
  }

}, false)
