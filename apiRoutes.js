// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app, global) {


  app.post("/api", function (req, res) {
    global.push(req.body.toPost);
    console.log(global);
    res.send(global);
  });


  app.get("/api", function (req, res) {
    console.log(global);
    res.send(global);
  });

};