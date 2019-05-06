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

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/productlist");
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/productlist");
// var db =require("./models");
//     db.Product.create(
//       {productname: "product a"},{category: "test"}, {size:"xs"}, {quantity:"3"}, {description: "thejr"}, {price:"3"}, {images:"gea"}, {keywords:"asd"}
//     ).then(function(a){
//       console.log(a)
//     }).catch(function(err){
//       console.log(err.message);
//     });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
