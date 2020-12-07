const vision = require("@google-cloud/vision");
const namer = require("color-namer");




const getColor = async (img) => {
  const client = new vision.ImageAnnotatorClient();

  const [result] = await client.imageProperties(img);
  const colors = result.imagePropertiesAnnotation.dominantColors.colors;
  colors.forEach((color) => console.log(color));

  const { red, green, blue } = colors[0].color;
  const colorName = namer(`rgb(${red}, ${green}, ${blue})`);
  console.log(colorName.basic[0].name);
  return colorName.basic[0].name;
};

module.exports = getColor;


