const fileLoader = require('file-loader');
const fileType = require('file-type');
const getColors = require('get-image-colors');

module.exports = async function(content) {
  const callback = this.async();
  try {
    const output = fileLoader.bind(this)(content);
    const {mime} = fileType(content);
    const colors = await getColors(content, mime);
    callback(
      null,
      `${output}module.exports.color = ${JSON.stringify(
        colors[0].hex()
      )};module.exports.colors = ${JSON.stringify(
        colors.map(color => color.hex())
      )};`
    );
  } catch (error) {
    callback(error);
  }
};
module.exports.raw = true;
