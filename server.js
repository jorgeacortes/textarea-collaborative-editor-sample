const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const  port = process.env.PORT || 3000;

/* App */
server.listen(port, () => {
    console.log('Server listening at port %d', port);
});
// Routing
app.use(express.static(path.join(__dirname, 'public')));

// Handle socket traffic
io.on('connection', (socket) => {
    // Relay chat data to all clients
    socket.on('myInputUpdate', function(data) {
        socket.broadcast.emit('myInputUpdate', data);
    });
});