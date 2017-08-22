import React from 'react'
import store from '../store'

class Tetromino extends React.Component {

  render() {

    const state = store.getState()
    const t = state.tetrominoes.slice(-1)[0]

    const getDivs = () => {
      const divs = []

      let key = 0
      const pattern = t.patterns[t.currentPatternIndex]
      for (let j = 0; j < pattern.length; j++) {
        for (let i = 0; i < pattern[0].length; i++) {

          if (pattern[j][i]) {
            const tStyle = {
              position: 'absolute',
              width: '40px',
              height: '40px',
              background: 'orange',
              top: `${(t.pos.y + j) * 40}px`,
              left: `${(t.pos.x + i) * 40}px`,
            }

            divs.push(<div className='sq' style={tStyle} key={key++} />)
          }

        }
      }

      return divs
    }

    return (
      <div style={ { position: 'absolute' } }>
        {getDivs()}
      </div>
    )

  }

}

export default Tetromino
