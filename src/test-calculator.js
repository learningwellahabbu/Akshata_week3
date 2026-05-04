// Test script for calculator functions
const calculator = require('./calculator');

console.log('=== Calculator Test Results ===\n');

// Test operations from the image
const testCases = [
  { a: 2, b: 3, op: 'add', expected: 5 },
  { a: 10, b: 4, op: 'subtract', expected: 6 },
  { a: 45, b: 2, op: 'multiply', expected: 90 },
  { a: 20, b: 5, op: 'divide', expected: 4 }
];

let passedTests = 0;
let failedTests = 0;

testCases.forEach((testCase) => {
  try {
    const result = calculator[testCase.op](testCase.a, testCase.b);
    const passed = result === testCase.expected;
    
    const status = passed ? '✓ PASS' : '✗ FAIL';
    console.log(`${status}: ${testCase.a} ${testCase.op.charAt(0).toUpperCase()} ${testCase.b} = ${result} (expected: ${testCase.expected})`);
    
    if (passed) {
      passedTests++;
    } else {
      failedTests++;
    }
  } catch (error) {
    console.log(`✗ FAIL: ${testCase.a} ${testCase.op} ${testCase.b} - Error: ${error.message}`);
    failedTests++;
  }
});

console.log(`\n=== Test Summary ===`);
console.log(`Passed: ${passedTests}/${testCases.length}`);
console.log(`Failed: ${failedTests}/${testCases.length}`);

if (failedTests === 0) {
  console.log('\n✓ All tests passed!');
  process.exit(0);
} else {
  console.log('\n✗ Some tests failed!');
  process.exit(1);
}
