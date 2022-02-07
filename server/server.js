const path = require('path')
const express = require('express')

const locations = require('./routes/locations')

const server = express()
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())

//locations API
server.use('/v1/', locations)

server.use('/v1/locations/', locations)

server.use('/v1/search-results/', locations)

server.use('/v1/*', (req, res) => res.sendStatus(404))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
