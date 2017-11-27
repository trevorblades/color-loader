const fileType = require('file-type');
const getColors = require('get-image-colors');
const loaderUtils = require('loader-utils');

module.exports = content => {
  const {mime} = fileType(content);
  return getColors(content, mime).then(colors => {
    const options = loaderUtils.getOptions(this);
    const result = JSON.stringify(
      options && options.simple
        ? colors[0].hex()
        : colors.map(color => color.hex())
    );
    return `module.exports = ${result};`;
  });
};
module.exports.raw = true;
