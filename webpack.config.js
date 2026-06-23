const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isDev =
  Boolean(process.env.WEBPACK_SERVE) || process.env.NODE_ENV === "development";
const isProd = !isDev;

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.[contenthash].js",
    clean: isProd, // Не чистим диск в режиме разработки!
    publicPath: "/", // КРИТИЧНО для многостраничника, чтобы пути не ломались
    assetModuleFilename: (pathData) => {
      const filepath = path
        .dirname(pathData.filename)
        .split(/[\\/]/)
        .slice(1)
        .join("/");
      return `${filepath}/[name].[contenthash][ext]`;
    },
  },
  devtool: isDev ? "source-map" : false, // В продакше source-map лучше отключить для скорости
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.pug$/,
        loader: "@webdiscus/pug-loader",
      },
      {
        test: /\.scss$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: Boolean(isDev) } },
          "postcss-loader",
          {
            loader: "sass-loader",
            options: { api: "modern", sourceMap: Boolean(isDev) },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: Boolean(isDev) } },
          "postcss-loader",
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.pug"),
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(
        __dirname,
        "src/ui-pages/headers-footers",
        "headers-footers.pug",
      ),
      filename: "ui-pages/headers-footers.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(
        __dirname,
        "src/ui-pages/form-elements",
        "form-elements(fe).pug",
      ),
      filename: "ui-pages/form-elements(fe).html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(
        __dirname,
        "src/ui-pages/colors-types",
        "colors-types.pug",
      ),
      filename: "ui-pages/colors-types.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/ui-pages/cards", "cards.pug"),
      filename: "ui-pages/cards.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/pages/sign-in", "sign-in.pug"),
      filename: "pages/sign-in.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/pages/landing", "landing.pug"),
      filename: "pages/landing.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/pages/search", "search.pug"),
      filename: "pages/search.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/pages/sign-up", "sign-up.pug"),
      filename: "pages/sign-up.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(
        __dirname,
        "src/pages/room-details",
        "room-details.pug",
      ),
      filename: "pages/room-details.html",
    }),

    //Подключаем MiniCssExtractPlugin только в продакшене
    !isDev &&
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
  ].filter(Boolean), // .filter(Boolean) удалит false из массива, когда isDev === true
  devServer: {
    watchFiles: path.join(__dirname, "src"),
    port: 9000,
    hot: true,
  },
  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "src/assets/images/"),
      "@vars": path.resolve(__dirname, "src/assets/styles/default/"),
    },
  },
  optimization: {
    minimize: isProd, // <-- ИЗМЕНЕНО: Минимизируем (в т.ч. sharp) только в продакшене
    minimizer: [
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            encodeOptions: {
              jpeg: { quality: 80, progressive: true },
              png: { quality: 80 },
              webp: { quality: 80 },
              gif: {},
            },
          },
        },
      }),
    ],
  },
  cache: { type: "filesystem" },
};
