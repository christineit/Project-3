const router = require("express").Router();
// const productRoutes = require("./products");

router.use("/products").get(function(req, res) {
  res.send("HI FROM PRODUCTS TOM ROUTE!! /api.products");
});

module.exports = router;
