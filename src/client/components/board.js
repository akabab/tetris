import React from 'react'
import Tetromino from './tetromino'
import Block from './block'
import store from '../store'
import { colors } from '../constants'

class Board extends React.Component {

  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    const style = {
      position: 'absolute',
      width: '400px',
      height: '800px',
      margin: 'auto',
      background: '#2a2f31',
    }

    const state = store.getState()
    const board = state.board

    const currentTetromino = state.tetrominoes.slice(-1)[0]

    let key = 0
    const blocks = board
      .map((a, y) => a
        .map((e, x) => {
          return <Block x={x * 40} y={y * 40} color={colors[e] || 'clear'} key={Math.random()} /> // TODO? random key ?
        }))

    return (
      <div style={style}>
        <Tetromino tetromino={currentTetromino} />
        {blocks}
      </div>
    )
  }
}

export default Board
