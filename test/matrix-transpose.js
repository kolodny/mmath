var assert = require('assert');
var mmath = require('..');

describe('Matrix#transpose', function() {
  it('should transpose the matrix', function() {
    var matrix = new mmath.Matrix([[1,2], [3,4], [5,6]]);
    var shouldEqual = new mmath.Matrix([[1,3,5], [2,4,6]])
    assert.deepEqual(matrix.transpose(), shouldEqual);
  });
});
