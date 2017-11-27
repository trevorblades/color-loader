# color-loader

[![CircleCI](https://circleci.com/gh/trevorblades/color-loader.svg?style=shield&circle-token=27c58abd14ac02f3fa39792e5aa883befc54655d)](https://circleci.com/gh/trevorblades/color-loader)

A webpack loader that extracts the color palette for an image

## Installation

`npm install --save color-loader`

## Usage

Get a color palette comprised of the most dominant colors in your image:

```js
import colors from 'color-loader!./path/to/image.jpg';
// returns an array of hex color strings
```

You can use it in your webpack configuration, too, however this means that all images that you `import` or `require` will return an array of colors.

```js
{
  // ...your awesome webpack config options
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

Get only the most dominant color of the image by setting the loader's `simple` option to `true` in in your webpack config.

```js
// in your webpack config
{
  test: /\.(jpg|png|gif)$/,
  use: 'color-loader',
  options: {
    simple: true
  }
}

// in your app
import color from 'color-loader!./path/to/image.jpg';
// returns a single RGB color string
```

You can also pass `simple` as a query param to your inline loaders.

```js
import color from 'color-loader?simple!./path/to/image.jpg';
// returns a single RGB color string
```
