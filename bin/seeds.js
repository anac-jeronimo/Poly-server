require("dotenv").config();
const mongoose = require("mongoose");
const Color = require("../models/Color");
const DB_NAME = "poly-server";

mongoose.connect("mongodb://127.0.0.1:27017/poly-server", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const color = [
  {
    name: "black",
    imageURL:
      "https://res.cloudinary.com/dkadtxtto/image/upload/v1607075911/poly-server/black_o6ztfq.png ",
  },
  {
    name: "blue",
    imageURL:
      "https://res.cloudinary.com/dkadtxtto/image/upload/v1607075460/poly-server/blue_utkgbo.png",
  },
  {
    name: "cyan",
    imageURL:
      "https://res.cloudinary.com/dkadtxtto/image/upload/v1607075461/poly-server/light-blue_e6dahc.png",
  },
  {
    name: "green",
    imageURL:
      "https://res.cloudinary.com/dkadtxtto/image/upload/v1607075462/poly-server/green_zxoroc.png",
  },
  {
    name: "teal",
    imageURL:
      "https://res.cloudinary.com/dkadtxtto/image/upload/v1607075461/poly-server/dark-green_liu676.png",
  },
  {
    name: "turquoise",
    imageURL:
      "https://res.cloudinary.com/dkadtxtto/image/upload/v1607075461/poly-server/light-blue_e6dahc.png",
  },
  {
    name: "indigo",
    imageURL:
      "https://res.cloudinary.com/dkadtxtto/image/upload/v1607075462/poly-server/violet_z6dsiu.png",
  },
  {
    name: "gray",
    imageURL:
      "https://res.cloudinary.com/dkadtxtto/image/upload/v1607075461/poly-server/dark-grey_xsimau.png",
  },
  {
    name: "purple",
    imageURL:
      "https://res.cloudinary.com/dkadtxtto/image/upload/v1607075462/poly-server/purple_ktslw0.png",
  },
  {
    name: "brown",
    imageURL:
      "https://res.cloudinary.com/dkadtxtto/image/upload/v1607075461/poly-server/brown_eyhasd.png",
  },
  {
    name: "tan",
    imageURL:
      "https://res.cloudinary.com/dkadtxtto/image/upload/v1607075461/poly-server/brown_eyhasd.png",
  },
  {
    name: "violet",
    imageURL:
      "https://res.cloudinary.com/dkadtxtto/image/upload/v1607075462/poly-server/violet_z6dsiu.png",
  },
  {
    name: "beige",
    imageURL:
      "https://res.cloudinary.com/dkadtxtto/image/upload/v1607075461/poly-server/khaki_swnqzy.png",
  },
  {
    name: "fuchsia",
    imageURL:
      "https://res.cloudinary.com/dkadtxtto/image/upload/v1607075462/poly-server/pink_gqc2gw.png",
  },
  {
    name: "gold",
    imageURL:
      "https://res.cloudinary.com/dkadtxtto/image/upload/v1607075461/poly-server/gold_wzfszp.png",
  },
  {
    name: "mangenta",
    imageURL:
      "https://res.cloudinary.com/dkadtxtto/image/upload/v1607075462/poly-server/orchid_zj8vb8.png",
  },
  {
    name: "orange",
    imageURL:
      "https://res.cloudinary.com/dkadtxtto/image/upload/v1607075462/poly-server/orange_nysgr5.png",
  },
  {
    name: "pink",
    imageURL:
      "https://res.cloudinary.com/dkadtxtto/image/upload/v1607075462/poly-server/pink_gqc2gw.png",
  },
  {
    name: "red",
    imageURL:
      "https://res.cloudinary.com/dkadtxtto/image/upload/v1607075462/poly-server/red_za9qup.png",
  },
  {
    name: "white",
    imageURL:
      "https://res.cloudinary.com/dkadtxtto/image/upload/v1607075926/poly-server/white_ggxvls.png",
  },
  {
    name: "yellow",
    imageURL:
      "https://res.cloudinary.com/dkadtxtto/image/upload/v1607075462/poly-server/yellow_oclecd.png",
  },
];
