const express = require("express");
// require("dotenv").config();
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// var keys = require("./client/src/keys");

// Define middleware here
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
