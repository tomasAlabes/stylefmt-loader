"use strict";

const stylefmt = require('stylefmt');
const postcss = require('postcss');
const scss = require('postcss-scss');
const loaderUtils = require("loader-utils");

const fs = require('fs');

module.exports = function (source) {
  
  let callback = this.async();
  let resourcePath = this.resourcePath;
  let query = loaderUtils.parseQuery(this.query);
  let stylefmtConf;
  
  if (query.config) {
    stylefmtConf = stylefmt({
      configFile: `${process.cwd()}/${query.config}`
    })
  } else {
    stylefmtConf = stylefmt();
  }
  
  postcss([
    stylefmtConf
  ])
    .process(source, {syntax: scss})
    .then(function (result) {
      
      fs.writeFile(resourcePath, result.css, () => callback(null, result.css));
      
    }).catch((e) => {
    throw new Error(e);
  });
  
};
