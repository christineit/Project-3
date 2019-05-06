const router = require("express").Router();
const productsController = require("../../controllers/productsController");
// Matches with "/api/products"
router.route("/")
    // .get(productsController.findAll)
    .post(productsController.create)
    .get(productsController.getAll)
    

    router.route("/selling")
        .get(productsController.getSellingProduct)

module.exports = router;
