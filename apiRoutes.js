// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app, global) {
  app.post("/api", function (req, res) {

    global.push(req.body);
    res.send(global);

  });

  app.get("/api", function (req, res) {

    res.send(global);

  });

};