const express = require("express");
// require("dotenv").config();
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// var keys = require("./client/src/keys");

// Define middleware here
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
//Define local MongoDB URI
var databaseURL = "mongodb://localhost/productlist";
//---------------------------------------------------
if (process.env.MONGO_URI) {
  //this executes if this is being executed in heroku app:
  mongoose.connect(process.env.MONGODB_URI);
} else {
  //this executes if this is being executed on your local machine
  mongoose.connect(databaseURL);
}
//------------------end database config-----------------

var db = mongoose.connection;

//show any mongoose errors
db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

//once logged into the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
