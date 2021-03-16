/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');

const rootPath = 'src';
const assetsPath = 'static/dist';

module.exports = {
  mode: 'development',
  entry: {
    main: [`./${rootPath}/index.js`],
  },
  context: path.resolve(__dirname, '../'),
  output: {
    path: path.resolve(__dirname, `../${assetsPath}`),
    filename: '[name].js',
    publicPath: 'http://localhost:3001/dist/',
  },
  devServer: {
    staticOptions: {
      redirect: true,
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
    disableHostCheck: true,
    contentBase: path.join(__dirname, `../${assetsPath}`),
    hot: true,
    port: 3001,
    host: '0.0.0.0',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|tsx|js)?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              import: true,
              modules: {
                localIdentName: '[local]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: 'expanded',
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      chunkFilename: '[id].css',
      filename: '[name].css',
    }),
    new AssetsPlugin({ path: path.resolve(__dirname, `../${assetsPath}`) }),
  ],
  resolve: {
    extensions: ['.jsx', '.tsx', '.js', '.ts', '.css', '.scss'],
  },
};
