const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PugPlugin = require('pug-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { watchFile } = require('fs');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: {
    index: './src/pages/index/index.pug',
    cTypes: './src/pages/colors-types/index.pug',
  },
  output: {
    clean: true,
    path: path.join(__dirname, 'dist/pages/'),
    // filename: 'index.[contenthash].js',
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
        test: /.pug$/,
        loader: PugPlugin.loader, // Pug loader
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', 
          'postcss-loader', 
          'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/inline',
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: path.join('icons', '[name].[contenthash][ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator:{
          filename: 'fonts/[name].[ext]'
        }
      },
    ],
  },
  
  plugins: [
    new PugPlugin({
      pretty: true,
      js:{
        filename: '[name].js'
      },
      css:{
        filename: '[name].css'
      }
    }),
    // new HtmlWebpackPlugin({
    //   template: path.join(__dirname, 'src', 'index.pug'),
    //   filename: 'index.html',
    // }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({      
      filename: '[name].[contenthash].css',
    }),
    //пригодится для фавикона
    // new FaviconsWebpackPlugin({
    //   logo: './src/images/favicon-1.png',
    //   mode: 'webapp',
    //   devMode: 'webapp',
    //   prefix: 'assets/favicons/', 
    //   cache: true,
    //   inject: htmlPlugin => {
    //     return true
    //   },
    //   favicons: {
    //     background: '#ddd',
    //     theme_color: '#333',
    //   }
    // })
  ],

  devServer: 
    {
      watchFiles: path.join(__dirname, 'src'),
      port: 9000,
    },

  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: 
            ImageMinimizerPlugin.imageminMinify,
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