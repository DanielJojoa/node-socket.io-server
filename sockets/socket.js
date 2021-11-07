const {io} = require('../index');
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
    socket.on('message', (event) => {
        console.log(event);
    })
})