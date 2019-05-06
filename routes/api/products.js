const router = require("express").Router();
const productsController = require("../../controllers/productsController");
const db = require("../../models");
// Matches with "/api/product"
router.route("/")
    // .get(productsController.findAll)
    .post(productsController.create)
    .get(productsController.getAll)

router.route("/selling")
    .get(productsController.getSellingProduct)

module.exports = router;