const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// var keys = require("./client/src/keys");

// Define middleware here
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
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
if (process.env.MONGOLAB_BROWN_URI) {
  //this executes if this is being executed in heroku app:
  mongoose.connect(process.env.MONGOLAB_BROWN_URI);
} else {
  //this executes if this is being executed on your local machine
  mongoose.connect(databaseURL);
}
//------------------end database config-----------------

var db = mongoose.connection;

//show any mongoose errors
db.on("error", function (err) {
  console.log("Mongoose Error: ", err);
});

//once logged into the db through mongoose, log a success message
db.once("open", function () {
  console.log("Mongoose connection successful.");
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
