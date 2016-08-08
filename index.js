var stylefmt = require('stylefmt');
var fs = require('fs');

module.exports = function(source) {
  
  var callback = this.async();
  
  stylefmt.process(source).then((result) => {
    
    fs.writeFile(this.resourcePath, result.css, () => callback(null, result.css));
    
  }).catch((e) => { throw new Error(e); });
  
};