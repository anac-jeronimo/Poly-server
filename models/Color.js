const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colorSchema = new Schema({
  name: String,
  imageURL: String
},
{
  timestamps: true
}
);

const User = mongoose.model('Color', colorSchema);

module.exports = Color;