# color-loader

A webpack loader that extracts the color palette for an image

## Dependencies

This loader depends on the `node-canvas` library, which requires [Cairo](https://cairographics.org) and some other dependencies to be installed on the machine that runs your webpack builds.

### macOS

```
brew install pkg-config cairo libpng jpeg giflib
```

### Ubuntu

```
sudo apt-get install libcairo2-dev libjpeg8-dev libpango1.0-dev libgif-dev build-essential g++
```

### Windows

Windows installation instructions are available [here](https://github.com/Automattic/node-canvas/wiki/Installation---Windows).

## Installation

Install `color-loader` using your favourite package manager:

```
yarn add --dev color-loader
```

...or

```
npm install --save-dev color-loader
```

## Usage

Get a color palette comprised of the most dominant colors in your image:

```js
import colors from 'color-loader!./path/to/image.jpg';
// returns array of RGB color strings
```

You can use it in your webpack configuration, too, however this means that all images that you `import` or `require` will return an array of colors.

```js
{
  ...
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: 'color-loader'
      }
    ]
  }
}
```

### Options

Get only the most dominant color of the image by passing the `simple` query param to the loader:

```js
import color from 'color-loader?simple!./path/to/image.jpg';
// returns a single RGB color string
```
