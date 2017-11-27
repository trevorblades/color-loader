# color-loader

[![CircleCI](https://circleci.com/gh/trevorblades/color-loader.svg?style=shield&circle-token=27c58abd14ac02f3fa39792e5aa883befc54655d)](https://circleci.com/gh/trevorblades/color-loader)

A webpack loader that extracts the color palette for an image

## Installation

`color-loader` has a peer dependency on `file-loader`.

`npm install --save file-loader color-loader`

## Usage

This loader is designed to be a drop-in replacement for `file-loader`. It will output the path to the provided image, along with information about the colors in the image. It features support for JPEG, PNG, GIF, and SVG files.

```js
import image, {color, colors} from 'color-loader!./path/to/image.jpg';
```

 - **`image`** is the image path generated by the file loader
 - **`color`** is the most dominant color in the image
 - **`colors`** is an array of the dominant colors in the image

You can use it in your webpack configuration, too! This means that all images that you `import` or `require` will always return the colors extracted from the image.

```js
{
  // ...your awesome webpack config options
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: 'color-loader'
      }
    ]
  }
}
```

## Options

`color-loader` takes no options, however because it implements `file-loader`, you can pass along any options you would normally pass to that loader. More information about `file-loader` [here](https://github.com/webpack-contrib/file-loader).

## Example

This image:

![example image](https://raw.githubusercontent.com/trevorblades/color-loader/master/test/example.png)

Will result in these colors:
 - ![#3a4f25](https://placehold.it/24/3a4f25/000000?text=+) #3a4f25
 - ![#b37a5d](https://placehold.it/24/b37a5d/000000?text=+) #b37a5d
 - ![#78993b](https://placehold.it/24/78993b/000000?text=+) #78993b
 - ![#839795](https://placehold.it/24/839795/000000?text=+) #839795
 - ![#8c472f](https://placehold.it/24/8c472f/000000?text=+) #8c472f

 You could use it in a React component like this:

 ```js
import image, {color} from './example.png';

const Component = () => (
  <div style={{
    backgroundColor: color,
    backgroundImage: image
  }}>
    <h1>Hello world!</h1>
  </div>
);
 ```
