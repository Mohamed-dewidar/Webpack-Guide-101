# Core Concepets

## Some Articles for read

- [The Core Concepts of Webpack](https://mvskiran.medium.com/the-core-concepts-of-webpack-customing-webpack-414483a86fb7)

## Entry

The point or points where to start the application bundling process.
A rule to consider: one entry point per HTML page.

- **SPA**: one entry point.
- **MPA**: multiple entry points.

**webpack.config.js**

```javascript
module.exports = {
  //...
  entry: {
    home: './home.js',
    about: './about.js',
    contact: './contact.js',
  },
};
```

## Output

The top-level output key contains a set of options instructing webpack on how and where it should output your bundles, assets, and anything else you bundle or load with webpack.

**webpack.config.js**

```javascript
module.exports = {
  //...
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js',
  },
};
```

## Loaders

It's a functions or modules tells webpack how are you gonna process certain types of files?And it matches and applies transformations on a per-file basis,based on the result path of that file.And before it gets added to the dependency graph.

Webpack enables use of `loaders` to preprocess files. This allows you to bundle any static resource way beyond JavaScript. You can easily write your own loaders using Node.js.

### Rules

[Rules documentation](https://webpack.js.org/configuration/module/#modulerules)

An array of `Rules` which are matched to requests when modules are created. These rules can modify how the `module` is created. They can apply `loaders` to the module, or modify the parser.

**webpack.config.js**

```javascript
module.exports = {
  //...
  module: {
    rules: [],
  },
};
```

### Rule

A Rule can be separated into three parts

- Conditions
- Results
- Nested Rules

#### Conditions

Conditions define when a rule should be applied based on the characteristics of a file. Conditions are specified using the

- `test` (required): A regular expression or a function that matches the filenames or paths
- `include` (optional) Include only files from the certain dir
- `exclude`(optional) Exlude only files from the certain dir

#### Results

Results define what happens when a rule's conditions are met. This part specifies the loaders or other configurations that should be applied to the matched files.

- `use` (required): An array or a string specifying the loaders that should be applied.
- `loader` (alternative to use): A string specifying a single loader without an array

### Chaining Loaders

**webpack.config.js**

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
```

this loaders will excute from right to left `style(css(sass()))` as if it's a group of nested functions.

## Plugins

`Plugins` are the backbone of webpack. Webpack itself is built on the same plugin system that you use in your webpack configuration!

### Anatomy

A webpack plugin is a JavaScript `object` that has an `apply` method. This `apply` method is called by the webpack compiler, giving access to the entire compilation lifecycle.

**ConsoleLogOnBuildWebpackPlugin.js**

```javascript
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('The webpack build process is starting!');
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;
```

The first parameter of the tap method of the compiler hook should be a camelized version of the plugin name. It is advisable to use a constant for this so it can be reused in all hooks.

### Usage

Since `plugins` can take arguments/options, you must pass a `new` instance to the `plugins` property in your webpack configuration.

**webpack.config.js**

```javascript
const path = require('path');
const ConsoleLogOnBuildWebpackPlugin = require('./ConsoleLogOnBuildWebpackPlugin.js');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [new webpack.ProgressPlugin(), new ConsoleLogOnBuildWebpackPlugin()],
};
```
