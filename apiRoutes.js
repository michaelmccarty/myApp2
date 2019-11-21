// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app, users) {
  app.post('/api', function(req, res) {
    const nick = req.body.nick;
    const pass = req.body.pass;

    console.log(req.body.nick, req.body.pass);

    res.send({ nick: nick, pass: pass });
  });
  app.get('/api', function(req, res) {
    console.log('posted to https://localhost:3000');
    res.end();
  });
};
