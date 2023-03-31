const express = require("express");
const router = express.Router();
const {getAllProducts, productDetails} = require("../controllers/product_controllers");


router.get("/", getAllProducts);
router.get("/details", productDetails);


module.exports = router;