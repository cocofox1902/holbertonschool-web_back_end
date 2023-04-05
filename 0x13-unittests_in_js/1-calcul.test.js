const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  it('should return 4 when passed 1 and 3', function () {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });

  it('should return 4 when passed 1 and 3.4', function () {
    assert.strictEqual(calculateNumber('SUM', 1, 3.4), 4);
  });

  it('should return 5 when passed 1 and 3.6', function () {
    assert.strictEqual(calculateNumber('SUM', 1, 3.6), 5);
  });

  it('should return 4 when passed 1.4 and 3', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 3), 4);
  });

  it('should return 5 when passed 1.6 and 3', function () {
    assert.strictEqual(calculateNumber('SUM', 1.6, 3), 5);
  });

  it('should return 4 when passed 1.4 and 3.4', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 3.4), 4);
  });

  it('should return 5 when passed 1.4 and 3.6', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 3.6), 5);
  });

  it('should return 5 when passed 1.6 and 3.4', function () {
    assert.strictEqual(calculateNumber('SUM', 1.6, 3.4), 5);
  });

  it('should return 6 when passed 1.6 and 3.6', function () {
    assert.strictEqual(calculateNumber('SUM', 1.6, 3.6), 6);
  });

  it('should return 2 when passed -1 and 3', function () {
    assert.strictEqual(calculateNumber('SUM', -1, 3), 2);
  });

  it('should return -2 when passed 1 and -3', function () {
    assert.strictEqual(calculateNumber('SUM', 1, -3), -2);
  });

  it('should return 2 when passed -1.4 and 3', function () {
    assert.strictEqual(calculateNumber('SUM', -1.4, 3), 2);
  });

  it('should return 1 when passed -1.6 and 3', function () {
    assert.strictEqual(calculateNumber('SUM', -1.6, 3), 1);
  });

  it('should return -2 when passed 1 and -3.4', function () {
    assert.strictEqual(calculateNumber('SUM', 1, -3.4), -2);
  });

  it('should return -3 when passed 1 and -3.6', function () {
    assert.strictEqual(calculateNumber('SUM', 1, -3.6), -3);
  });

  it('should return -2 when passed 1.4 and -3.4', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, -3.4), -2);
  });

  it('should return -1 when passed 1.6 and -3.4', function () {
    assert.strictEqual(calculateNumber('SUM', 1.6, -3.4), -1);
  });

  it('should return -3 when passed 1.4 and -3.6', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, -3.6), -3);
  });

  it('should return -2 when passed 1.6 and -3.6', function () {
    assert.strictEqual(calculateNumber('SUM', 1.6, -3.6), -2);
  });

  it('should return 2 when passed -1.4 and 3.4', function () {
    assert.strictEqual(calculateNumber('SUM', -1.4, 3.4), 2);
  });

  it('should return 2 when passed -1.6 and 3.4', function () {
    assert.strictEqual(calculateNumber('SUM', -1.6, 3.4), 1);
  });

  it('should return 2 when passed -1.4 and 3.6', function () {
    assert.strictEqual(calculateNumber('SUM', -1.4, 3.6), 3);
  });

  it('should return 2 when passed -1.6 and 3.6', function () {
    assert.strictEqual(calculateNumber('SUM', -1.6, 3.6), 2);
  });

  it('should return 0 when passed 0 and 0', function () {
    assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
  });

  it('should return 1 when passed 0 and 1', function () {
    assert.strictEqual(calculateNumber('SUM', 0, 1), 1);
  });

  it('should return 1 when passed 0 and 0.6', function () {
    assert.strictEqual(calculateNumber('SUM', 0, 0.6), 1);
  });

  it('should return 0 when passed 0.4 and 0', function () {
    assert.strictEqual(calculateNumber('SUM', 0.4, 0), 0);
  });

  it('should return 1 when passed 0.6 and 0', function () {
    assert.strictEqual(calculateNumber('SUM', 0.6, 0), 1);
  });

  it('should return 1 when passed 0.6 and 0.6', function () {
    assert.strictEqual(calculateNumber('SUM', 0.6, 0.6), 2);
  });

  it('should return -1 when passed -0.6 and -0.6', function () {
    assert.strictEqual(calculateNumber('SUM', -0.6, -0.6), -2);
  });

  it('should return 0 when passed -0.4 and 0', function () {
    assert.strictEqual(calculateNumber('SUM', -0.4, 0), 0);
  });

  it('should return 0 when passed -0.6 and 0', function () {
    assert.strictEqual(calculateNumber('SUM', -0.6, 0), -1);
  });

  it('should return 0 when passed 0 and -0.4', function () {
    assert.strictEqual(calculateNumber('SUM', 0, -0.4), 0);
  });

  it('should return 1 when passed 0 and -0.6', function () {
    assert.strictEqual(calculateNumber('SUM', 0, -0.6), -1);
  });

  it('should return NaN when passed NaN and 1', function () {
    assert(isNaN(calculateNumber('SUM', NaN, 1)));
  });

  it('should return NaN when passed 1 and NaN', function () {
    assert(isNaN(calculateNumber('SUM', 1, NaN)));
  });

  it('should return NaN when passed NaN and NaN', function () {
    assert(isNaN(calculateNumber('SUM', NaN, NaN)));
  });

  it('should return 1 when passed 1 and Infinity', function () {
    assert.strictEqual(calculateNumber('SUM', 1, Infinity), Infinity);
  });

  it('should return 1 when passed Infinity and 1', function () {
    assert.strictEqual(calculateNumber('SUM', Infinity, 1), Infinity);
  });

  it('should return 1 when passed Infinity and Infinity', function () {
    assert.strictEqual(calculateNumber('SUM', Infinity, Infinity), Infinity);
  });

  it('should return -1 when passed -1 and -Infinity', function () {
    assert.strictEqual(calculateNumber('SUM', -1, -Infinity), -Infinity);
  });

  it('should return -1 when passed -Infinity and -1', function () {
    assert.strictEqual(calculateNumber('SUM', -Infinity, -1), -Infinity);
  });

  it('should return -1 when passed -Infinity and -Infinity', function () {
    assert.strictEqual(calculateNumber('SUM', -Infinity, -Infinity), -Infinity);
  });

  it('should return 4 when passed 1 and 3', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
  });

  it('should return 4 when passed 1 and 3.4', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.4), -2);
  });

  it('should return 5 when passed 1 and 3.6', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.6), -3);
  });

  it('should return 4 when passed 1.4 and 3', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3), -2);
  });

  it('should return 5 when passed 1.6 and 3', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.6, 3), -1);
  });

  it('should return 4 when passed 1.4 and 3.4', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.4), -2);
  });

  it('should return 5 when passed 1.4 and 3.6', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.6), -3);
  });

  it('should return 5 when passed 1.6 and 3.4', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.6, 3.4), -1);
  });

  it('should return 6 when passed 1.6 and 3.6', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.6, 3.6), -2);
  });

  it('should return 2 when passed -1 and 3', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -1, 3), -4);
  });

  it('should return -2 when passed 1 and -3', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, -3), 4);
  });

  it('should return 2 when passed -1.4 and 3', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 3), -4);
  });

  it('should return 1 when passed -1.6 and 3', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.6, 3), -5);
  });

  it('should return -2 when passed 1 and -3.4', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, -3.4), 4);
  });

  it('should return -3 when passed 1 and -3.6', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, -3.6), 5);
  });

  it('should return -2 when passed 1.4 and -3.4', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, -3.4), 4);
  });

  it('should return -1 when passed 1.6 and -3.4', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.6, -3.4), 5);
  });

  it('should return -3 when passed 1.4 and -3.6', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, -3.6), 5);
  });

  it('should return -2 when passed 1.6 and -3.6', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.6, -3.6), 6);
  });

  it('should return 2 when passed -1.4 and 3.4', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 3.4), -4);
  });

  it('should return 2 when passed -1.6 and 3.4', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.6, 3.4), -5);
  });

  it('should return 2 when passed -1.4 and 3.6', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 3.6), -5);
  });

  it('should return 2 when passed -1.6 and 3.6', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.6, 3.6), -6);
  });

  it('should return 0 when passed 0 and 0', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
  });

  it('should return 1 when passed 0 and 1', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 0, 1), -1);
  });

  it('should return 1 when passed 0 and 0.6', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 0, 0.6), -1);
  });

  it('should return 0 when passed 0.4 and 0', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 0.4, 0), 0);
  });

  it('should return 1 when passed 0.6 and 0', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 0.6, 0), 1);
  });

  it('should return 1 when passed 0.6 and 0.6', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 0.6, 0.6), 0);
  });

  it('should return -1 when passed -0.6 and -0.6', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -0.6, -0.6), 0);
  });

  it('should return 0 when passed -0.4 and 0', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -0.4, 0), -0);
  });

  it('should return 0 when passed -0.6 and 0', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -0.6, 0), -1);
  });

  it('should return 0 when passed 0 and -0.4', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 0, -0.4), 0);
  });

  it('should return 1 when passed 0 and -0.6', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 0, -0.6), 1);
  });

  it('should return NaN when passed NaN and 1', function () {
    assert(isNaN(calculateNumber('SUBTRACT', NaN, 1)));
  });

  it('should return NaN when passed 1 and NaN', function () {
    assert(isNaN(calculateNumber('SUBTRACT', 1, NaN)));
  });

  it('should return NaN when passed NaN and NaN', function () {
    assert(isNaN(calculateNumber('SUBTRACT', NaN, NaN)));
  });

  it('should return 1 when passed 1 and Infinity', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, Infinity), -Infinity);
  });

  it('should return 1 when passed Infinity and 1', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', Infinity, 1), Infinity);
  });

  it('should return 1 when passed Infinity and Infinity', function () {
    assert.strictEqual(
      calculateNumber('SUBTRACT', Infinity, Infinity),
      NaN
    );
  });

  it('should return -1 when passed -1 and -Infinity', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -1, -Infinity), Infinity);
  });

  it('should return -1 when passed -Infinity and -1', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -Infinity, -1), -Infinity);
  });

  it('should return -1 when passed -Infinity and -Infinity', function () {
    assert.strictEqual(
      calculateNumber('SUBTRACT', -Infinity, -Infinity),
      NaN
    );
  });

  it('should return 1 when passed 1 and 3', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
  });

  it('should return 1 when passed 1 and 3.4', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3.4), 0.3333333333333333);
  });

  it('should return 1 when passed 1 and 3.6', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3.6), 0.25);
  });

  it('should return 1 when passed 1.4 and 3', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 3), 0.3333333333333333);
  });

  it('should return 1 when passed 1.6 and 3', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.6, 3), 0.6666666666666666);
  });

  it('should return 1 when passed 1.4 and 3.4', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 3.4), 0.3333333333333333);
  });

  it('should return 1 when passed 1.4 and 3.6', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 3.6), 0.25);
  });

  it('should return 1 when passed 1.6 and 3.4', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.6, 3.4), 0.6666666666666666);
  });

  it('should return 1 when passed 1.6 and 3.6', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.6, 3.6), 0.5);
  });

  it('should return 1 when passed -1 and 3', function () {
    assert.strictEqual(calculateNumber('DIVIDE', -1, 3), -0.3333333333333333);
  });

  it('should return 1 when passed 1 and -3', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1, -3), -0.3333333333333333);
  });

  it('should return 1 when passed -1.4 and 3', function () {
    assert.strictEqual(calculateNumber('DIVIDE', -1.4, 3), -0.3333333333333333);
  });

  it('should return 1 when passed -1.6 and 3', function () {
    assert.strictEqual(calculateNumber('DIVIDE', -1.6, 3), -0.6666666666666666);
  });

  it('should return 1 when passed 1 and -3.4', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1, -3.4), -0.3333333333333333);
  });

  it('should return 1 when passed 1 and -3.6', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1, -3.6), -0.25);
  });

  it('should return 1 when passed 1.4 and -3', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, -3), -0.3333333333333333);
  });

  it('should return 1 when passed 1.6 and -3', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.6, -3), -0.6666666666666666);
  });

  it('should return 1 when passed 1.4 and -3.4', function () {
    assert.strictEqual(
      calculateNumber('DIVIDE', 1.4, -3.4),
      -0.3333333333333333
    );
  });

  it('should return 1 when passed 1.4 and -3.6', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, -3.6), -0.25);
  });

  it('should return 1 when passed 1.6 and -3.4', function () {
    assert.strictEqual(
      calculateNumber('DIVIDE', 1.6, -3.4),
      -0.6666666666666666
    );
  });

  it('should return 1 when passed 1.6 and -3.6', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.6, -3.6), -0.5);
  });

  it('should return 1 when passed 1 and 0', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
  });

  it('should return 1 when passed 1.4 and 0', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('should return 1 when passed 1.6 and 0', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.6, 0), 'Error');
  });

  it('should return 1 when passed 1 and 0.4', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0.4), 'Error');
  });

  it('should return 1 when passed 1 and 0.6', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0.6), 1);
  });

  it('should return 1 when passed 1.4 and 0.4', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
  });

  it('should return 1 when passed 1.4 and 0.6', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.6), 1);
  });
});
