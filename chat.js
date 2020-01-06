// ===============================================================================
// Chat
// ===============================================================================

const admin = require('firebase-admin');
const config = require('./config');

admin.initializeApp(config.firebase);

module.exports = function(app) {
  app.post('/chat', function(req, res) {

  });
};
