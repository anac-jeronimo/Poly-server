const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const fileUpload = require("../configs/cloudinary");
const vision = require("@google-cloud/vision");
const getColor = require("../utils/api");
const images = require("../bin/images");
const User = require("../models/User");
/* const sound = require("../utils/textToSpeech"); */

//upload to cloudinary
router.post("/upload", fileUpload.single("file")["url"], (req, res) => {
  console.log("in upload");
  if (req.file.path) {
    res.json({ fileUrl: req.file.path });
  } else {
    console.log("is working form uploads!");
  }
});

router.get("/getcolor/:image", (req, res) => {
  const image = req.params.image;
  getColor(
    `https://res.cloudinary.com/dkadtxtto/image/upload/v1607365566/poly-client/${image}`
  ).then((response) => {
    let colorName = response;
    res.json({ imageUrl: images[response], colorName });
  });
});

router.put("/addimage", (req, res) => {
  const { imageurl, userid } = req.body;
  console.log(imageurl, userid);
  User.findByIdAndUpdate(userid, { $push: { uploads: imageurl } }).then(
    (response) => {
      res.json(response);
    }
  );
});

/* //text to speech
router.get("/textToSpeech", (req, res) => {
  const sound = req.params.sound;

}) */

module.exports = router;
