var chai = require('chai');
var expect = chai.expect; 
var storage = require('./../../checker/storage');
var path = require("path");

describe('storage', function() {
  it('getFilePath() should return correct concatenated file path', function() {
    expect(storage.getFilePath("sol123", "cpp")).to.equal("storage\\solutions\\sol123.cpp");
  });
});