import React from 'react'
import Block from './block'
import { colors } from '../constants'

const Tetromino = ({ tetromino: t }) => {

  const blocks = () => {
    const divs = []

    let key = 0
    const pattern = t.patterns[t.patternIndex]
    for (let y = 0; y < pattern.length; y++) {
      for (let x = 0; x < pattern[0].length; x++) {

        if (pattern[y][x]) {
          divs.push(<Block
            x={x * 40}
            y={y * 40}
            color={colors[t.letter]}
            key={key++}
          />)
        }
      }
    }

    return divs
  }

  const containerStyle = {
    position: 'absolute',
    transform: `translate(${t.x * 40}px, ${t.y * 40}px)`,
  }

  return (
    <div className='tetromino' style={containerStyle}>
      {blocks()}
    </div>
  )

}

export default Tetromino
