# Config File

Out of the box, webpack won’t require you to use a configuration file. However, it will assume the entry point of your project is src/index.js and will output the result in dist/main.js minified and optimized for production.
[Webpack config file documentation](https://webpack.js.org/configuration/)

## Module Type

Webpack initially adopted CommonJS (CJS) as the module system for its configuration files due to the widespread usage of CommonJS in the Node.js ecosystem. The primary reason for this choice was to ensure compatibility and ease of use with existing Node.js modules and npm packages, which predominantly use CommonJS.

**webpack.config.js**

```javascript
const path = require(path);
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
```

## Use a different configuration file

If for some reason you want to use a different configuration file depending on certain situations, you can change this via command line by using the `--config` flag.

**package.json**

```javascript
"scripts": {
  "build": "webpack --config prod.config.js"
}
```

## Passing variables to your configuration

```bash
npm run webpack -- --env.mode development
```

setting `--env.mode` the value of the mode variable to `development`

### using env in Webpack Configuration

**webpack.config.js**

```javascript
module.exports = env => {
  conole.log(env);

  return {
    mode: env.mode,
    // other configuration...
  };
};
```

Using this we can apply certain plugins or rules depending on the mode

## Config file options

| Option   | Description                                                                                          | Value                                 |
| :------- | :--------------------------------------------------------------------------------------------------- | :------------------------------------ |
| `mode`   | Providing the mode configuration option tells webpack to use its built-in optimizations accordingly. | `none` - `development` - `production` |
| `entry`  | The point or points where to start the application bundling process.                                 | Object with entry options             |
| `output` | The location where to save and control the result from the bundling process.                         | Object with output options            |
| `rules`  | Array of rules to handle the bundling of different file types.                                       | Array of Rule object                  |
