let express = require("express");
let logger = require("morgan");

const HTTP_CONTROL_METHODS = "GET, POST, OPTIONS";

let global = ["hard coded first item", "and a second item"];

let PORT = process.env.PORT || 3000;

// Initialize Express
let app = express();

app.use((req,res,next)=>{   //ENABLE CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", HTTP_CONTROL_METHODS);
  next();
});

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public a static folder
app.use(express.static("dist"));

require("./apiRoutes")(app, global);

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});