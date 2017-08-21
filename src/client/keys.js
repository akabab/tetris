import { move } from './actions/square'

const SPACE = 32

const LEFT  = 37
const UP    = 38
const RIGHT = 39
const DOWN  = 40

const keys = (store) => {

  document.body.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
      case LEFT:
        store.dispatch(move.left())
        break

      case UP:
        store.dispatch(move.up())
        break

      case RIGHT:
        store.dispatch(move.right())
        break

      case DOWN:
        store.dispatch(move.down())
        break

      case SPACE:
        document.paused = !document.paused
        break

    }
  }, false)

}

export default keys
