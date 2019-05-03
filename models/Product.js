const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({

  productname: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: false
  },
  size: {
    type: Array,
    required: false
  },
  quantity: {
    type: Number,
    required: false
  },
  description: {
    type: String,
    required: false
  },

  Date: {
    type: Date,
    default: Date.now
  },

  price: {
    type: Number,
    required: false
  },
  images: {
    type: Array,
    required: false
  },
  keywords: {
    type: Array,
    required: false
  },
  selling: {
    type: Boolean,
    default: false
  }

});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
