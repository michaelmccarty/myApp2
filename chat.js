// ===============================================================================
// Chat
// ===============================================================================

const config = require('./config');

module.exports = function(app, io, chatMessages) {
  app.post('/chat', function(req, res) {});



  //////////////////////////////
  //  socket.io
  //////////////////////////////
  io.on('connection', socket => {
    console.log(socket.id + ' has connected.');

    socket.on('message', data => {
      console.log(data + ' has been sent from ' + socket.id);
      io.emit('message', data + ' has been sent from ' + socket.id);
    });

    socket.on('disconnect', data => {
      console.log(socket.id + ' has disconnected.');
    });
  });
};
