let axios = require("axios");
let path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app, db) {
  app.post("/login", function(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    
    console.log(req.body.username);
  });
};