const express = require("express");
const router = express.Router();
const vision = require("@google-cloud/vision");
const getColor = require("../utils/api");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/getColor", (req, res) => {
  getColor("public/images/2020-08-08 (2).png");
});

module.exports = router;
