import axios from "axios";


export default {

  saveProduct: function (productData) {
    console.log("APIJS-7", productData)
    return axios.post("/api/products/", productData);

  },
  getAllProducts: function (productData) {

    return axios.get("/api/products", productData)
  },

  getSellingProduct: function (productData) {

    return axios.get("/api/selling", productData)
  }
};
