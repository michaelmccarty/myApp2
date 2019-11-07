// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app, global) {
  app.post("/api", function(req, res) {

    global.push(req.body);
    
    console.log(req.body);

    res.send(global);

  });
};