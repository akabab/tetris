import React from 'react'
import { connect } from 'react-redux'
import Board from '../components/board'
import HUD from '../components/hud'

const App = () => {

  const style = {
    backgroundColor: '#16191e'
  }

  return (
    <div className='app' style={style}>
      <Board />
      <HUD />
    </div>
  )
}

export default App
