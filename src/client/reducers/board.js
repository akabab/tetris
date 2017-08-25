import { game } from '../constants'

const initialState = Array(game.size.y).fill(0).map(e => Array(game.size.x).fill(0))
console.log(initialState)

const reducer = (state = initialState, action) => {

  switch (action.type) {


    default:
      return state
  }

}

export default reducer
