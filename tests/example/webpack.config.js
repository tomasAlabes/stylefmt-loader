var path = require('path');

module.exports = {
  entry: "./test.js",
  output: {
    filename: "output.js"
  },
  module: {
    loaders: [
      {test: /\.scss$/, loader: "css!sass!stylefmt?config=.stylelintrc"}
    ]
  }
};