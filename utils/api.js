const vision = require("@google-cloud/vision");
const client = new vision.ImageAnnotatorClient();

const [result] = await client.imageProperties(
  "public/images/2020-08-08 (2).png"
);
const colors = result.imagePropertiesAnnotation.dominantColors.colors;
colors.forEach((color) => console.log(color));
const [result] = await client.imageProperties(
  `gs://${public}/${public / images / 2020 - 08 - 08(2).png}`
);
