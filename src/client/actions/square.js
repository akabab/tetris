export const MOVE_LEFT = 'MOVE_LEFT'
export const MOVE_UP = 'MOVE_UP'
export const MOVE_RIGHT = 'MOVE_RIGHT'
export const MOVE_DOWN = 'MOVE_DOWN'

export const move = {
  left: () => ({ type: MOVE_LEFT }),
  up: () => ({ type: MOVE_UP }),
  right: () => ({ type: MOVE_RIGHT }),
  down: () => ({ type: MOVE_DOWN }),
}
