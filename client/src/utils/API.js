import axios from "axios";


export default {

  saveProduct: function (productData) {
    return axios.post("/api/products/", productData);

  },
  getAllProducts: function (productData) {
    return axios.get("/api/products", productData)
  }
 
};
