// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app, global) {


  app.post("/api", function (req, res) {
    global.push(req.body);
    console.log("pushing: "+ req.body);
    res.send(global);
  });


  app.get("/api", function (req, res) {
    console.log("sending: "+ global);
    res.send(global);
  });

};