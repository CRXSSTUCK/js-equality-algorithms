function testES5() {

  var EXCEPTION = 'hasException';

  var tests = [{
    algo: doubleEqualsES5,
    algoName: 'doubleEquals',
    operation: function(x, y) {
      return x == y;
    },
    operator: '=='
  }, {
    algo: tripleEqualsES5,
    algoName: 'tripleEquals',
    operation: function(x, y) {
      return x === y;
    },
    operator: '==='
  }];

  var allPassed = true;
  tests.forEach(function(test) {
    testCasesES5.forEach(function(case1) {
      testCasesES5.forEach(function(case2) {

        var result;
        try {
          result = test.algo(case1, case2);
        } catch(e) {
          result = EXCEPTION;
        }

        var expected;
        try {
          expected = test.operation(case1, case2);
        } catch(e) {
          expected = EXCEPTION;
        }

        if (result !== expected) {
          allPassed = false;
          console.error(
            (case1) + ' ' + (test.operator) + ' ' + (case2) + ' returns ' + (expected) +
            ', ' + test.algoName + '(' + (case1) + ', ' + (case2) + ') returns ' + (result)
          );
        }
      });
    });
  });

  return allPassed;
}
