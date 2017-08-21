import React from 'react'

const params = require('../../../params')

class Board extends React.Component {

  componentDidMount() {
    document.store.subscribe(() => this.forceUpdate())
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
    const state = document.store.getState()
    const sq = state.square

    const sq_style = {
      width: '40px',
      height: '40px',
      background: 'orange',
      position: 'relative',
      top: `${sq.y * 40}px`,
      left: `${sq.x * 40}px`,
    }

    return (
      <div style={style}>
        <div style={sq_style}>{`x: ${sq.x}, y: ${sq.y}`}</div>
      </div>
    )
  }
}

export default Board
