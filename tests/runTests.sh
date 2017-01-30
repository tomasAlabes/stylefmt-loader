#!/bin/sh

# Test without config option
(cd tests/example && cp ../original/test.scss . && rm -rf ./node_modules/stylefmt-loader && npm i && ../../node_modules/webpack/bin/webpack.js --config webpack.config.js) && ./node_modules/mocha/bin/mocha --ui tdd tests/loader.js

# Test with config option
(cd tests/example && cp ../original/test.scss . && rm -rf ./node_modules/stylefmt-loader && npm i && ../../node_modules/webpack/bin/webpack.js --config webpack.config.noopt.js) && ./node_modules/mocha/bin/mocha --ui tdd tests/loader.js
