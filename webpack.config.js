const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

const outputDir =  path.join(__dirname, "dist", "assets")
const env = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const isDev = env === 'development'

module.exports = {
  entry: {
    app: './src/index.js',
  },
  mode: env,
  output: {
    path: outputDir,
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              isDev && 'react-refresh/babel',
            ].filter(Boolean),
          },
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
    isDev && new ReactRefreshPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
    }),
  ],
  devServer: {
    inline: true,
    hot: true,
    historyApiFallback: true,
    sockPort: 1234,
    writeToDisk: file => {
      const isHotUpdate = file.endsWith('.hot-update.js') || file.endsWith('.hot-update.json')
      return !isHotUpdate
    },
  },
}