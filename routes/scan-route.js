const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const fileUpload = require("../configs/cloudinary");
const vision = require("@google-cloud/vision");
const getColor = require("../utils/api");
const images = require("../bin/images");
const User = require("../models/User");
/* const sound = require("../utils/textToSpeech"); */
const cloudinary = require("cloudinary").v2;

//upload to cloudinary
router.post("/upload", fileUpload.single("file"), (req, res) => {
  console.log("in upload");

  res.json({ fileUrl: req.file.path });
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

router.post("/uploadcamera", (req, res) => {
  /*   const obj = JSON.parse(JSON.stringify(req.body.url));
  const imgFromCamera = Object.keys(obj)[0];
  console.log("this is the obj image", obj); */
  // fileUpload.single(imgFromCamera);

  cloudinary.uploader.upload(
    req.body.url,
    { folder: "poly-client" },
    function (error, result) {
      res.json({ result });
    }
  );
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
