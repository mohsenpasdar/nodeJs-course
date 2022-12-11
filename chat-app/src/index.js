const path = require('path')
const http = require('http')
const express = require("express");
const socketio = require('socket.io')

const app = express();
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000;

// Define paths for Express config.
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup static directory to serve.
app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
    console.log('new web socket connection');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    })

    socket.emit('message', 'Welcome!')

    socket.on('sendMessage', (message) => {
        io.emit('message', message)
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
})