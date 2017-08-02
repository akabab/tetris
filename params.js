const params = {
  server: {
    host: '0.0.0.0',
    port: 3004,
    getUrl: () => 'http://' + params.server.host + ':' + params.server.port,
  },
}

module.exports = params
