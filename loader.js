const fileLoader = require('file-loader');
const fileType = require('file-type');
const getColors = require('get-image-colors');
const outdent = require('outdent');

module.exports = async function(content) {
  const callback = this.async();
  try {
    const output = fileLoader.bind(this)(content);
    const filePath = output
      .toString()
      .slice(output.toString().indexOf('=') + 1, -1)
      .trim();

    const {mime} = fileType(content);
    const colors = await getColors(content, mime);
    callback(
      null,
      outdent`
        export default ${filePath};
        export const color = ${JSON.stringify(colors[0].hex())};
        export const colors = ${JSON.stringify(
          colors.map(color => color.hex())
        )};
      `
    );
  } catch (error) {
    callback(error);
  }
};
module.exports.raw = true;
