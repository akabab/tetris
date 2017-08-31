import store from './store'
import { game } from './constants'

const insideBounds = (x, y) => (x >= 0 && y >= 0
  && x < game.size.x && y < game.size.y)

export default (tetromino) => {

  const board = store.getState().board
  const t = tetromino
  const pattern = t.patterns[t.patternIndex]

  for (let y = 0; y < pattern.length; y++) {
    for (let x = 0; x < pattern[0].length; x++) {
      if (pattern[y][x]) {
        // out of bounds
        if (t.x + x < 0
          || t.y + y >= game.size.y || t.x + x >= game.size.x) {
          return true
        }

        // overlaps another tetromino
        if (insideBounds(t.x + x, t.y + y) && board[t.y + y][t.x + x]) {
          return true
        }
      }
    }
  }

  return false
}
