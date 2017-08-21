const defaults = {
  room: `room ${Math.floor(Math.random() * 10000)}`, // server.getRandomRoom
  playerName: `player ${Math.floor(Math.random() * 10000)}`,
}

const parseHash = hash => {
  const matches = hash.match(/#(\w*)(\[(\w*)\])?/);

  return {
    room: matches[1],
    playerName: matches[3],
  }
}

window.onhashchange = e => {
  const hash = (new URL(e.newURL)).hash
  const { room, playerName } = parseHash(hash)

  console.log('room:', room, 'playerName:', playerName)
}
