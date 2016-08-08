var assert = require('assert');
var fs = require('fs');

suite('stylefmt-loader', function() {

  test('should fix a incorrectly styled scss (taken from stylefmt readme example)', function() {
    
    var actual = fs.readFileSync('./tests/example/test.scss', "utf8");
    var expected = fs.readFileSync('./tests/expected/test.scss', "utf8");
    
    assert.equal(actual, expected, "stylemfmt seemed not to changed the file");
    
  });

});