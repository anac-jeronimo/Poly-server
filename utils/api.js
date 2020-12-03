const vision = require("@google-cloud/vision");

const getColor = async (img) => {
  const client = new vision.ImageAnnotatorClient();

  const [result] = await client.imageProperties(img);
  const colors = result.imagePropertiesAnnotation.dominantColors.colors;
  colors.forEach((color) => console.log(color));
};

module.exports = getColor;
