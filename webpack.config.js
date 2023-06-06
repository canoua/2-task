// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
  entry: {
    'pages/cards': './src/pages/cards/index.pug',
    'pages/index': './src/pages/landing/index.pug',
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    // publicPath: '/',
  },

 plugins: [
    new PugPlugin({
      js: {
        filename: 'js/[name].[contenthash:8].js',
      },
      css: {
        filename: 'css/[name].[contenthash:8].css',
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|jpeg|ico)/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name].[hash:8][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext][query]',
        },
      },
    ],
  },
  
  

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

  devServer: 
    {
      watchFiles: path.join(__dirname, 'src/pages/index/'),
      port: 9000,
    },
};