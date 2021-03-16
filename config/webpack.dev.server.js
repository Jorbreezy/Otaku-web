/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

// Use Nodemon plugin for hot reloading on server
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const rootPath = path.resolve(__dirname, '../');

module.exports = {
  mode: 'development',
  target: 'node',
  devtool: 'eval-source-map',
  context: rootPath,
  node: {
    __dirname: false, // use the standard Node behavior of __dirname
  },
  externals: [nodeExternals()],
  entry: {
    server: './src/index.tsx',
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: 'http://localhost:3000/dist/',
  },
  module: {
    rules: [
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[folder]-[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx|tsx|ts)?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new NodemonPlugin({
      watch: path.resolve('./dist'),
      ext: 'js,json,jsx,tsx,ts',
      script: './devServer.js',
      delay: 0,
      ignore: ['src/components'],
    }),
  ],
  resolve: {
    extensions: ['.jsx', '.tsx', '.js', '.ts', '.css', '.scss'],
  },
};
