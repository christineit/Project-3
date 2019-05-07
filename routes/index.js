const path = require("path");
const router = require("express").Router();
const productsController = require("../controllers/productsController");

// const apiRoutes = require("./api");

// // API Routes
// router.use("/api", apiRoutes);

router
  .route("/api/products")
  .post(productsController.create)
  .get(productsController.getAll);

router
  .route("/api/products/selling")
  .get(productsController.getSellingProduct)
router
  .route("/api/products/selling/:id")
  .put(productsController.sellProduct);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
