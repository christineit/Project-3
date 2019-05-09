const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGOLAB_BROWN_URI ||
  "mongodb://localhost/productlist"
);
const productSeed = [
  {
    Name: "The Dead Zone",
    Category: "T-shirt",
    Size: ["XS", "S", "M", "L", "XL", "N/A"],
    Quantity: 153,
    Description: "A good looking",
    Date: new Date(Date.now()),
    Price: 3.53,
    Images_URL: ["https://placehold.it/300"],
    Association: ["t", "t shirt", "clothing"]
  }
]
db.Product
  .remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });