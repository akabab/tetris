import React from 'react'
import Tetromino from './tetromino'
import store from '../store'

const params = require('../../../params')

class Board extends React.Component {

  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    const size = params.game.size
    const w = size.width
    const h = size.height

    const style = {
      width: '400px',
      height: '800px',
      margin: 'auto',
      background: '#e0e0e0',
    }

    return (
      <div style={style}>
        <Tetromino />
      </div>
    )
  }
}

export default Board
