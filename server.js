let express = require('express');
let app = express();
let logger = require('morgan');
let server = require('http').Server(app);
let socket = require('socket.io');
let io = socket(server);

const HTTP_CONTROL_METHODS = 'GET, POST, OPTIONS';

let PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  //ENABLE CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', HTTP_CONTROL_METHODS);
  next();
});

// Configure middleware

// Use morgan logger for logging requests
app.use(logger('dev'));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public a static folder
app.use(express.static('dist'));

require('./auth')(app);

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

// Start the server
server.listen(PORT, function() {
  console.log('App running on port ' + PORT + '!');
});

console.log(io);
