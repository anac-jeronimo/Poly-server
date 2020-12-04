const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const Color = mongoose.model("Color", colorSchema);

const colorSchema = new Schema(
  {
    name: String,
    imageURL: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Color", colorSchema);
