import React from 'react'

const colors = {
  'I': '#906dc9',
  'J': '#79e1ff',
  'L': '#ffa300',
  'O': '#dc1d42',
  'S': '#518087',
  'T': '#aff800',
  'Z': '#eaf0c4',
};

const Tetromino = ({ tetromino: t }) => {

  const blocks = () => {
    const divs = []

    let key = 0
    const pattern = t.patterns[t.patternIndex]
    for (let j = 0; j < pattern.length; j++) {
      for (let i = 0; i < pattern[0].length; i++) {

        if (pattern[j][i]) {
          const style = {
            position: 'absolute',
            width: '40px',
            height: '40px',
            backgroundColor: colors[t.letter],
            transform: `translate(${i * 40}px, ${j * 40}px)`,
          }

          divs.push(<div style={style} key={key++} />)
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
    <div style={containerStyle}>
      {blocks()}
    </div>
  )

}

export default Tetromino
