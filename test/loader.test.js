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
    `module.exports = [${colors.map(color => `"${color}"`).join(',')}]`
  );
});

test('extracts only the most dominant color of an image', async () => {
  const stats = await compiler(imageFile, {simple: true});
  const output = stats.toJson().modules[0].source;
  const colors = await getColors(imagePath);
  expect(output).toBe(`module.exports = "${colors[0].hex()}"`);
});
