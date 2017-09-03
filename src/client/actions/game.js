export const TOGGLE_PAUSE = 'TOGGLE_PAUSE'

export const togglePause = () => {
  return {
    type: TOGGLE_PAUSE
  }
}


export const END_GAME = 'END_GAME'

export const endGame = () => {
  return {
    type: END_GAME
  }
}


export const INCREMENT_COMPLETED_LINES = 'INCREMENT_COMPLETED_LINES'

export const incrementCompletedLines = n => {
  return {
    type: INCREMENT_COMPLETED_LINES,
    n
  }
}
