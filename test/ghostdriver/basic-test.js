// Generated by CoffeeScript 1.3.3
(function() {
  var desired, remoteWdConfig, test, _ref;

  _ref = require('./config'), desired = _ref.desired, remoteWdConfig = _ref.remoteWdConfig;

  test = require('../common/basic-test-base').test;

  describe("wd", function() {
    return describe("ghostdriver", function() {
      return describe("basic test", function() {
        return describe("using ghostdriver", function() {
          return test(remoteWdConfig, desired);
        });
      });
    });
  });

}).call(this);
