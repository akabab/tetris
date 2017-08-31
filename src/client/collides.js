import store from './store'
import { game } from './constants'

export default (tetromino) => {

  const board = store.getState().board
  const t = tetromino
  const pattern = t.patterns[t.patternIndex]

  for (let y = 0; y < pattern.length; y++) {
    for (let x = 0; x < pattern[0].length; x++) {
      if (pattern[y][x]) {
        // out of bounds
        if (t.y + y < 0 || t.x + x < 0
          || t.y + y >= game.size.y || t.x + x >= game.size.x) {
          console.log('collides: out of bounds..')
          return true
        }

        // overlaps another tetromino
        if (board[t.y + y][t.x + x]) {
          console.log('collides: overlaps')
          return true
        }
      }
    }
  }

  return false
}
