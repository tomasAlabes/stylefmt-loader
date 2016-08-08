var stylefmt = require('stylefmt');

module.exports = function(source) {

  var callback = this.async();

  stylefmt.process(source).then((result) => {

      callback(null, result.css);

  }).fail((err) => console.error(err) );
  

};