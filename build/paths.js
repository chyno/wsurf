var path = require('path');

var appRoot = 'src/client/';
var serverRoot = 'src/server/';

module.exports = {
  root: appRoot,
  serverRoot: serverRoot,
  nodeServer : serverRoot + "app.js",
  source: appRoot + '**/*.js',
  serverSource: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: 'styles/**/*.css',
  output: 'dist/',
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
