import axios from "axios";

export default {
  saveProduct: function (productData) {
    console.log("APIJS-7", productData);
    return axios.post("/api/products/", productData);
  },
  getAllProducts: function (productData) {
    return axios.get("http://localhost:3001/api/products", productData);
  },
  getSellingProduct: function (productData) {
    console.log(productData);

    return axios.get("/api/products/selling", productData);
  },
  sellProduct: function (productData) {
    return axios.put("/api/products/selling/:id", productData)
  }
};
