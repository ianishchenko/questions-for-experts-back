const Server = use('Server');
const io = use('socket.io')(Server.getInstance());

const EVENTS = require('../app/Constants/SocketEvents');
io.on('connection', function (socket) {
  socket.on(EVENTS.USER_CONNECTED, function (user) {
    socket.emit(EVENTS.USER_CONNECTED, user);
  });
  socket.on(EVENTS.MESSAGE_SENT, function (message) {
    socket.broadcast.emit(EVENTS.MESSAGE_RECEIVED, message);
  });
});
