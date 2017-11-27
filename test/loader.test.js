const getColors = require('get-image-colors');
const path = require('path');

const compiler = require('./compiler.js');

const imageFile = 'example.png';
const imagePath = path.join(__dirname, imageFile);

test('extracts the color palette of an image', async () => {
  const stats = await compiler(imageFile);
  const output = stats.toJson().modules[0].source;
  const colors = await getColors(imagePath);
  expect(output).toBe(
    `module.exports = __webpack_public_path__ + "00059afd33ab2de3f25979f18c49d535.png";module.exports.color = "${colors[0].hex()}";module.exports.colors = [${colors
      .map(color => `"${color}"`)
      .join(',')}];`
  );
});
