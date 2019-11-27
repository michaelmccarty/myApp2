// ===============================================================================
// Auth
// ===============================================================================

const admin = require('firebase-admin');
const config = require('./config');

admin.initializeApp(config.firebase);

module.exports = function(app) {
  app.post('/login', function(req, res) {
    const token = req.body.token;

    console.log('token received: ' + token);

    admin
      .auth()
      .verifyIdToken(token)
      .then(result => {
        console.log('verifyIdToken result: ' + JSON.stringify(result));
      });

    res.send({ valid: 'true' });
  });

  app.post('/register', function(req, res) {
    const token = req.body.token;

    console.log('token received: ' + token);

    admin
      .auth()
      .verifyIdToken(token)
      .then(result => {
        console.log('verifyIdToken result: ' + JSON.stringify(result));
      });

    res.send({ valid: 'true' });
  });
};
