const router = require("express").Router();
const productsController = require("../../controllers/productsController");
const db = require("../../models");
// Matches with "/api/product"
router
  .route("/api/products")
  // .get(productsController.findAll)
  .post(productsController.create)
  .get(productsController.getAll);

// router.route("/api/selling").get(productsController.getSellingProduct);

module.exports = router;
