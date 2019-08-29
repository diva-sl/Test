const {
  test
} = require('./util');
const {
  fn100,
  fn200,
  some,
  every,
  atleast2,
  everybut1,
  each,
  filter,
  padding,
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

const asc = (a, b) => {
  return (a < b) ? -1 : (b < a) ? 1 : 0;
};
const desc = (a, b) => {
  return (a < b) ? 1 : (b < a) ? -1 : 0;
};

const output4 = fn200([1, 4, 5, 2, 3], asc);
test(output4.length, 5, 'fn200');
test(output4[0], 1, 'fn200');
test(output4[1], 2, 'fn200');
test(output4[2], 3, 'fn200');
test(output4[3], 4, 'fn200');
test(output4[4], 5, 'fn200');

const output5 = fn200([1, 4, 5, 2, 3], desc);
test(output5.length, 5, 'fn200');
test(output5[0], 5, 'fn200');
test(output5[1], 4, 'fn200');
test(output5[2], 3, 'fn200');
test(output5[3], 2, 'fn200');
test(output5[4], 1, 'fn200');

const isOdd = n => n % 2 == 1;
var x = some([1, 2, 3, 4], isOdd);
test(x, true, 'some');
var x = some([1, 2, 4, 6], isOdd);
test(x, true, 'some');
var x = some([2, 4, 6], isOdd);
test(x, false, 'some');

var y = every([1, 2, 3, 4], isOdd);
test(y, false, 'every');
var y = every([1, 2, 4, 6], isOdd);
test(y, false, 'every');
var y = every([1, 3, 5], isOdd);
test(y, true, 'every');

var x = atleast2([1, 2, 3, 4], isOdd);
test(x, true, 'atleast2.1');
var x = atleast2([1, 2, 4, 6], isOdd);
test(x, false, 'atleast2.2');
var x = atleast2([2, 4, 6], isOdd);
test(x, false, 'atleast2.3');
var x = atleast2([1, 3], isOdd);
test(x, true, 'atleast2.4');

var x = everybut1([1, 2, 3, 4], isOdd);
test(x, false, 'everybut1.1');
var x = everybut1([2, 1, 3, 5], isOdd);
test(x, true, 'everybut1.2');
var x = everybut1([2, 4, 6], isOdd);
test(x, false, 'everybut1.3');
var x = everybut1([1, 3], isOdd);
test(x, false, 'everybut1.4');

// each,
// filter,
// padding,
