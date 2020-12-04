const express = require("express");
const router = express.Router();
const vision = require("@google-cloud/vision");
const getColor = require("../utils/api");
const images = require("../bin/images");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/getcolor", (req, res) => {
  getColor("public/images/2020-08-08 (2).png").then((response) => {
    let colorName = response;
    res.json({ imageUrl: images[response], colorName });
  });
});

module.exports = router;
