const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const fileUpload = require("../configs/cloudinary");

//upload to cloudinary
router.post("/upload", fileUpload.single("file"), (req, res) => {
  console.log("in upload");
  res.json({ fileUrl: req.file.path });
});

module.exports = router;
