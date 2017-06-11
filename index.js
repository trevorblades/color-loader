const Color = require('color');
const ColorThief = require('color-thief');
const loaderUtils = require('loader-utils');

const rgbString = color => Color.rgb(color).toString();

// eslint-disable-next-line func-names
module.exports = function(content) {
  const colorThief = new ColorThief();
  const colors = colorThief.getPalette(content);
  const options = loaderUtils.getOptions(this);
  const result = JSON.stringify(
    options && options.simple ? rgbString(colors[0]) : colors.map(rgbString)
  );
  return `module.exports = ${result};`;
};
module.exports.raw = true;
