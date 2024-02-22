const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const path = require('path');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.[contenthash].js',
    assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
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
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.pug'),
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/ui-pages/headers-footers', 'headers-footers.pug'),
      filename: 'ui-pages/headers-footers.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/ui-pages/form-elements', 'form-elements.pug'),
      filename: 'ui-pages/form-elements.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/ui-pages/colors-types', 'colors-types.pug'),
      filename: 'ui-pages/colors-types.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/ui-pages/cards', 'cards.pug'),
      filename: 'ui-pages/cards.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/pages/sign-in', 'sign-in.pug'),
      filename: 'pages/sign-in.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/pages/landing', 'landing.pug'),
      filename: 'pages/landing.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/pages/search', 'search.pug'),
      filename: 'pages/search.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/pages/sign-up', 'sign-up.pug'),
      filename: 'pages/sign-up.html',
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ['dist'],
        },
      },
    }),
  ],
  devServer: {
    watchFiles: path.join(__dirname, 'src'),
    port: 9000,
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              ['svgo', { name: 'preset-default' }],
            ],
          },
        },
      }),
    ],
  },
};