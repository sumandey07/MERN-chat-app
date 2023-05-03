const path = require("path");
const webpack = require("webpack");

const environment = process.env.ENVIRONMENT;

console.log("environment:::::", environment);

module.exports = {
  entry: "./server.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "api.bundle.js",
  },
  target: "node",
  plugins: [new webpack.DefinePlugin(ENVIRONMENT_VARIABLES)],
};
