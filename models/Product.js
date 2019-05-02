const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  
  productname: { 
    type: String,
     required: false 
    },
  category: { 
    type: String,
    required: false 
  },
  size: { 
    type: String,
    required: false 
  },
  quantity: {
    type: String,
    required: false 
  },
  description: { 
    type: String,
    required: false 
  },

  // Date: { 
  //   type:Date, 
  //   default: Date.now 
  // },

  price: {
    type:String, 
    required: false 
  },
  images:{
    type: String,
    required: false 
  },
  keywords:{
    type: String,
    required: false 
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
