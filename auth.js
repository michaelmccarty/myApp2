// ===============================================================================
// Auth
// ===============================================================================

module.exports = function(app) {
  app.post('/login', function(req, res) {
    const nick = req.body.nick;
    const pass = req.body.pass;

    console.log(req.body.nick, req.body.pass);

    res.send({ nick: nick, pass: pass });
  });
  app.post('/register', function(req, res) {
    const nick = req.body.nick;
    const email = req.body.email;
    const pass = req.body.pass;

    console.log(nick, email, pass);

    res.send({ nick: nick, email: email, pass: pass });
  });
};
