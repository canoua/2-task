const HtmlWebpackPlugin = require('html-webpack-plugin');
// const FileManagerPlugin = require('filemanager-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.[contenthash].js',
    // assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: path.join('icons', '[name].[contenthash][ext]'),
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.pug'),
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/pages', 'sign-up.pug'),
      filename: 'sign-up.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/ui', 'headers-footers.pug'),
      filename: 'headers-footers.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/ui', 'form-elements.pug'),
      filename: 'form-elements.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/ui', 'colors-types.pug'),
      filename: 'colors-types.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/ui', 'cards.pug'),
      filename: 'cards.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/pages', 'sign-in.pug'),
      filename: 'sign-in.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/pages', 'landing.pug'),
      filename: 'landing.html',
    }),
    // new FileManagerPlugin({
    //   events: {
    //     onStart: {
    //       delete: ['dist'],
    //     },
    //   },
    // }),
  ],
  devServer: {
    watchFiles: path.join(__dirname, 'src'),
    port: 9000,
  },
};