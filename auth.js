// ===============================================================================
// Auth
// ===============================================================================

module.exports = function(app) {
  app.post('/login', function(req, res) {
    const email = req.body.email;
    const pass = req.body.pass;

    console.log(email, pass);

    res.send({ email: email, pass: pass });
  });
  app.post('/register', function(req, res) {
    const nick = req.body.nick;
    const email = req.body.email;
    const pass = req.body.pass;

    console.log(nick, email, pass);

    res.send({ nick: nick, email: email, pass: pass });
  });
};
