import axios from "axios";


export default {
    
    saveProduct: function(productData) {
      // console.log("APIJS-7", productData)  
      return axios.post("/api/products/", productData);
      },

      // getProduct: function(id) {
      //   console.log("APIJS-12", productData)
      //   return axios.get("/api/products/" + id);
      // },
    };
    