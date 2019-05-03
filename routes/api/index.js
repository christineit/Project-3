const router = require("express").Router();
const productRoutes = require("./products");


router.use("/products", productRoutes);

module.exports = router;
