  import { game } from './constants'
import { patterns } from './tetrominoes'

const letters = Object.keys(patterns)
const randomLetter = () => letters[Math.floor(Math.random() * letters.length)]

export const randomTetromino = () => {
  const letter = randomLetter()

  return {
    letter,
    patterns: patterns[letter],
    patternIndex: 0,
    x: Math.floor(Math.random() * (game.size.x - patterns[letter][0].length + 1)),
    y: -2,
  }
}
