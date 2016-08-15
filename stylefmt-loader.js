const stylefmt = require('stylefmt');
const postcss = require('postcss');
const scss = require('postcss-scss');
const loaderUtils = require("loader-utils");

const fs = require('fs');

module.exports = function (source) {
  
  let callback = this.async();
  let resourcePath = this.resourcePath;
  let query = loaderUtils.parseQuery(this.query);
  
  postcss([stylefmt({
    config: `${process.cwd()}/${query.config}`
  })])
    .process(source, {syntax: scss})
    .then(function (result) {
      
      fs.writeFile(resourcePath, result.css, () => callback(null, result.css));
      
    }).catch((e) => {
    throw new Error(e);
  });
  
};