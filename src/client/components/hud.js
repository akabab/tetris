import React from 'react'
import store from '../store'

class HUD extends React.Component {

  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    const state = store.getState()
    const game = state.game

    const style = {
      display: 'flex',
      width: '400px',
      height: '50px',
      margin: 'auto',
      alignItems: 'center',
    }

    const textStyle = {
      flex: 1,
      color: 'white',
      fontSize: '20px',
      padding: '5px',
    }

    const message = `${game.ended ? 'game over <press r>' :
      game.paused ? 'paused <press space>': ''}`

    return (
      <div className='hud' style={style}>
        <span style={textStyle}>{`score: ${game.linesCompleted}`}</span>
        <span style={{...textStyle, textAlign: 'right'}}>{message}</span>
      </div>
    )
  }

}

export default HUD
