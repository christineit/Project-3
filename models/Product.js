const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  
  Name: { type: String, required: true },
  Category: { type: String},
  Size: { type: Array},
  Quantity: {type: Number },
  Description: { type: String},
  Date: { type:Date, default: Date.now },
  Price: {type:Number, required: true },
  Images_URL:{type:Array},
  Association:{type:Array}
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
