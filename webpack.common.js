const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "inline-source-map",
  output: {
    path: path.resolve("dist", "assets"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: "style-loader", // Creates style nodes from JS strings.
          },
          {
            loader: "css-loader", // Translates CSS into CommonJS.
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader", // Compiles Sass to CSS.
            options: {
              sassOptions: {
                includePaths: [
                  "./src/styles/common", // Allows for import from this folder without specifying path.
                ],
              },

              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },
  externals: {
    zendesk_app_framework_sdk: "ZAFClient",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      hash: true,
    }),
  ],
};
