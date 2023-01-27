const path = require('path')
const express = require('express')
const vidRoute = require('./routes/video')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/videos', vidRoute)

server.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'))
  })

module.exports = server