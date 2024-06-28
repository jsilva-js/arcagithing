const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  target: "web",
  entry: "./app/src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "app/dist"),
    assetModuleFilename: "images/[name][ext]",
  },
  devServer: {
    static: path.resolve(__dirname, "app/dist"),
    port: 4444,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.json$/,
        type: "json",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "json", "txt"],
    alias: {
      "@arcagithing": path.resolve(__dirname, "src"),
    },
  },
};
