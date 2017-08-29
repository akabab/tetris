import React from 'react'
import { connect } from 'react-redux'
import Board from '../components/board'

const App = ({ message }) => {
  const style = {
    backgroundColor: '#16191e'
  }

  return (
    <div style={style}>
      <span>{message}</span>
      <Board />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    message: state.message
  }
}

export default connect(mapStateToProps, null)(App)
