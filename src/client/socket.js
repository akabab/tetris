import { patterns } from './tetrominoes'

const patternsKeys = Object.keys(patterns)

export const newTetromino = () => {
  const letter = patternsKeys[Math.floor(Math.random() * patternsKeys.length)]

  return {
    letter,
    patterns: patterns[letter],
    patternIndex: 0, // random?
    x: 3, // random
    y: 0,
  }
}
