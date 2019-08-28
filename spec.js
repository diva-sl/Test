const {
  test
} = require('./util');
const {
  fn100,
  fn200,
  fn300,
  fn400,
  fn500
} = require('./fns');

const output3 = fn100([1, 2, 5], a => (a + 1) * 2);
test(output3.length, 3, 'fn100');
test(output3[0], 4, 'fn100');
test(output3[1], 6, 'fn100');
test(output3[2], 12, 'fn100');

const input1 = [{
  name: 'ram',
  age: 23,
  sex: 'M'
}, {
  name: 'babu',
  age: 34,
  sex: 'F'
}];

const output1 = fn100(input1, a => a.name);
test(output1.length, 2, 'fn100');
test(output1[0], 'ram', 'fn100');
test(output1[1], 'babu', 'fn100');

const output2 = fn100(input1, a => a.age);
test(output2.length, 2, 'fn100');
test(output2[0], 23, 'fn100');
test(output2[1], 34, 'fn100');
