const express = require("express");
const path=require("path")
const router = express.Router();
const registerUser = require(path.join(__dirname,"../control/product.js"));

router.route("/api").post(registerUser);
// router.route("/product").delete(registerUser);

module.exports = router;