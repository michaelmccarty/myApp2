// ===============================================================================
// Chat
// ===============================================================================

module.exports = function(app, io, chatMessages) {
  app.post('/chat', function(req, res) {
    if (req) {
      res.send({ valid: 'true' });
      console.log("sent response from /chat");
    }
  });

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
