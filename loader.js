const fileType = require('file-type');
const getColors = require('get-image-colors');
const loaderUtils = require('loader-utils');

module.exports = async function(content) {
  const options = loaderUtils.getOptions(this);
  const callback = this.async();
  try {
    const {mime} = fileType(content);
    const colors = await getColors(content, mime);
    const result =
      options && options.simple
        ? colors[0].hex()
        : colors.map(color => color.hex());
    callback(null, `module.exports = ${JSON.stringify(result)}`);
  } catch (error) {
    callback(error);
  }
};
module.exports.raw = true;
