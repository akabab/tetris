import React from 'react'
import { connect } from 'react-redux'
import Board from '../components/board'

const App = () => {

  const style = {
    backgroundColor: '#16191e'
  }

  return (
    <div className='app' style={style}>
      <Board />
    </div>
  )
}

export default App
