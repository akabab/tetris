import React from 'react'
import Tetromino from './tetromino'
import store from '../store'

class Board extends React.Component {

  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    const style = {
      width: '400px',
      height: '800px',
      margin: 'auto',
      background: '#e0e0e0',
    }

    const tetrominoes = store.getState().tetrominoes
      .map((t, index) => <Tetromino tetromino={t} key={index} />)

    return (
      <div style={style}>
        {tetrominoes}
      </div>
    )
  }
}

export default Board
