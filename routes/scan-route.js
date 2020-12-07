const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const fileUpload = require("../configs/cloudinary");
const vision = require("@google-cloud/vision");
const getColor = require("../utils/api");
const images = require("../bin/images");

//upload to cloudinary
router.post("/upload", fileUpload.single("file"), (req, res) => {
  console.log("in upload");
  res.json({ fileUrl: req.file.path });
});

router.get("/getcolor/:image", (req, res) => {
  getColor(
    `https://res.cloudinary.com/dkadtxtto/image/upload/v1607365566/poly-client/${image}`
  ).then((response) => {
    let colorName = response;
    res.json({ imageUrl: images[response], colorName });
  });
});

module.exports = router;
