module.exports = {
  entry: "./test.js",
  output: {
    filename: "output.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "css-loader",
          "sass-loader",
          {
            loader: "stylefmt-loader",
            options: {
              config: ".stylelintrc"
            }
          }
        ]
      }
    ]
  }
};