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
        "src/pages/ui/headers-footers",
        "headers-footers.pug",
      ),
      filename: "pages/ui/headers-footers.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(
        __dirname,
        "src/pages/ui/form-elements",
        "form-elements(fe).pug",
      ),
      filename: "pages/ui/form-elements(fe).html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(
        __dirname,
        "src/pages/ui/colors-types",
        "colors-types.pug",
      ),
      filename: "pages/ui/colors-types.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/pages/ui/cards", "cards.pug"),
      filename: "pages/ui/cards.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/pages/app/sign-in", "sign-in.pug"),
      filename: "pages/app/sign-in.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/pages/app/landing", "landing.pug"),
      filename: "pages/app/landing.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/pages/app/search", "search.pug"),
      filename: "pages/app/search.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/pages/app/sign-up", "sign-up.pug"),
      filename: "pages/app/sign-up.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(
        __dirname,
        "src/pages/app/room-details",
        "room-details.pug",
      ),
      filename: "pages/app/room-details.html",
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
      "@vars": path.resolve(__dirname, "src/styles/default/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@layouts": path.resolve(__dirname, "src/layouts/"),
      "@styles": path.resolve(__dirname, "src/styles")
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
