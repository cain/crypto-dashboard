import express from 'express'
import { Nuxt, Builder } from 'nuxt'

import api from './api'

const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// Import API Routes
app.use('/api', api)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
// app.listen(port, host)
// Listen the server
server.listen(port, host)

console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console

// Socket.io
let messages = []
io.on('connection', (socket) => {
  socket.on('last-messages', function (fn) {
    fn(messages.slice(-50))
  })
  socket.on('send-message', function (message) {
    messages.push(message)
    socket.broadcast.emit('new-message', message)
  })
})
