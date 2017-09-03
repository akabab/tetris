import React from 'react'
import Tetromino from './tetromino'
import Block from './block'
import store from '../store'
import { game, colors } from '../constants'

class Board extends React.Component {

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const style = {
      position: 'relative',
      width: '400px',
      height: '800px',
      margin: 'auto',
      background: '#2a2f31',
      overflow: 'hidden',
    }

    const state = store.getState()
    const board = state.board

    const currentTetromino = state.tetrominoes.slice(-1)[0]

    let blocks = []
    for (let y = 0; y < game.size.y; y++) {
      for (let x = 0; x < game.size.x; x++) {
        if (board[y][x] != 0) {
          blocks.push(<Block
            x={x * 40}
            y={y * 40}
            color={colors[board[y][x]] || 'clear'}
            key={Math.random()}  // TODO? random key ?
          />)
        }
      }
    }

    return (
      <div className='board' style={style}>
        <Tetromino tetromino={currentTetromino} />
        <div className='blocksContainer'>
          {blocks}
        </div>
      </div>
    )
  }
}

export default Board
