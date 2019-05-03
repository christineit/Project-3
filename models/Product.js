const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
<<<<<<< HEAD
  
  Name: { type: String, required: true },
  Category: { type: String },
  Size: { type: String },
  Quantity: { type: Number },
  Description: { type: String },
  Date: { type: Date, default: Date.now },
  Price: { type: Number, required: true },
  Images_URL: { type: Array },
  Association: { type: Array }
=======
  
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
    type:Date, 
    default: Date.now 
  },

  price: {
    type: Number, 
    required: false 
  },
  images:{
    type: Array,
    required: false 
  },
  keywords:{
    type: Array,
    required: false 
  }
>>>>>>> master
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
