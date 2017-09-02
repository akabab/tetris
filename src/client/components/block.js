import React from 'react'
import { colors } from '../constants'

const Block = ({ x, y, color }) => {

  const style = {
    position: 'absolute',
    width: '40px',
    height: '40px',
    backgroundColor: color,
    transform: `translate(${x}px, ${y}px)`,
    boxShadow: '0px 0px 0px 1px black inset',
  }

  return <div className='block' style={style} />
}

export default Block
