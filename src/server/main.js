const params = require('../../params')
const server = require('./index')
const debug = require('debug')
const loginfo = debug('tetris:info')

server.create(params.server)
  .then(() => loginfo('not yet ready to play tetris with U ...'))
