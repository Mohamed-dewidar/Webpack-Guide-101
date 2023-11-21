const path = require('path');
const ConsoleLogOnBuildWebpackPlugin = require('./ConsoleLogOnBuildWebpackPlugin.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

module.exports = env => {
  console.log(env);
  return {
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
    plugins: [new webpack.ProgressPlugin(), new ConsoleLogOnBuildWebpackPlugin(), new HtmlWebpackPlugin()],
  };
};
