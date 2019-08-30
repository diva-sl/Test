const {
    test,
    testDeep
} = require('./util');
const all = require('./fns');

const output3 = all.fn100([1, 2, 5], a => (a + 1) * 2);
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

const output1 = all.fn100(input1, a => a.name);
test(output1.length, 2, 'fn100');
test(output1[0], 'ram', 'fn100');
test(output1[1], 'babu', 'fn100');

const output2 = all.fn100(input1, a => a.age);
test(output2.length, 2, 'fn100');
test(output2[0], 23, 'fn100');
test(output2[1], 34, 'fn100');

const asc = (a, b) => {
    return (a < b) ? -1 : (b < a) ? 1 : 0;
};
const desc = (a, b) => {
    return (a < b) ? 1 : (b < a) ? -1 : 0;
};

const output4 = all.fn200([1, 4, 5, 2, 3], asc);
test(output4.length, 5, 'fn200');
test(output4[0], 1, 'fn200');
test(output4[1], 2, 'fn200');
test(output4[2], 3, 'fn200');
test(output4[3], 4, 'fn200');
test(output4[4], 5, 'fn200');

const output5 = all.fn200([1, 4, 5, 2, 3], desc);
test(output5.length, 5, 'fn200');
test(output5[0], 5, 'fn200');
test(output5[1], 4, 'fn200');
test(output5[2], 3, 'fn200');
test(output5[3], 2, 'fn200');
test(output5[4], 1, 'fn200');

const isOdd = n => n % 2 == 1;
var x = all.some([1, 2, 3, 4], isOdd);
test(x, true, 'some');
var x = all.some([1, 2, 4, 6], isOdd);
test(x, true, 'some');
var x = all.some([2, 4, 6], isOdd);
test(x, false, 'some');

var y = all.every([1, 2, 3, 4], isOdd);
test(y, false, 'every');
var y = all.every([1, 2, 4, 6], isOdd);
test(y, false, 'every');
var y = all.every([1, 3, 5], isOdd);
test(y, true, 'every');

var x = all.atleast2([1, 2, 3, 4], isOdd);
test(x, true, 'all.atleast2.1');
var x = all.atleast2([1, 2, 4, 6], isOdd);
test(x, false, 'all.atleast2.2');
var x = all.atleast2([2, 4, 6], isOdd);
test(x, false, 'all.atleast2.3');
var x = all.atleast2([1, 3], isOdd);
test(x, true, 'all.atleast2.4');

var x = all.everybut1([1, 2, 3, 4], isOdd);
test(x, false, 'everybut1.1');
var x = all.everybut1([2, 1, 3, 5], isOdd);
test(x, true, 'everybut1.2');
var x = all.everybut1([2, 4, 6], isOdd);
test(x, false, 'everybut1.3');
var actual = all.everybut1([1, 3], isOdd);
test(actual, false, 'everybut1.4');

test(all.padding('abc', 10), '       abc', 'padding.1');
test(all.padding('abcdef', 10), '    abcdef', 'padding.2');
test(all.padding('abcd', 6), '  abcd', 'padding.3');

actual = all.intersection([1, 2, 3], [4, 5, 6]);
test(actual.length, 0, 'intersection');

actual = all.intersection([1, 2, 3, 4, 5, 6], [4, 5, 6]);
test(actual.length, 3, 'intersection');
test(actual[0], 4, 'intersection.1');
test(actual[1], 5, 'intersection.2');
test(actual[2], 6, 'intersection.3');

actual = all.intersection([4, 5, 6], [1, 2, 3, 4, 5, 6]);
test(actual.length, 3, 'intersection');
test(actual[0], 4, 'intersection.4');
test(actual[1], 5, 'intersection.5');
test(actual[2], 6, 'intersection.6');

actual = all.intersection([4, 5, 6, 7], [1, 2, 3, 4, 5, 6]);
test(actual.length, 3, 'intersection');
test(actual[0], 4, 'intersection.7');
test(actual[1], 5, 'intersection.8');
test(actual[2], 6, 'intersection.9');

actual = all.intersection([4, 6, 3], [1, 2, 4]);
test(actual.length, 1, 'intersection');
test(actual[0], 4, 'intersection.7');

actual = all.intersection([1, 2, 3], [2, 3, 4, 5, 6]);
test(actual.length, 2, 'intersection');
test(actual[0], 2, 'intersection.7');
test(actual[1], 3, 'intersection.8');

actual = all.zip(['a', 'b'], [1, 2], [true, false]);
var expected = [['a', 1, true], ['b', 2, false]];
testDeep(actual, expected, 'all.zip');

actual = all.zip(['a', 'b'], [1, 2], [true, false], [1]);
expected = [['a', 1, true, 1], ['b', 2, false, undefined]];
testDeep(actual, expected, 'all.zip');

actual = all.zip(['a', 'b', 'c'], [2, 3, 5], [true, false]);
expected = [['a', 2, true], ['b', 3, false], ['c', 5, undefined]];
testDeep(actual, expected, 'all.zip');

// each,
// filter,
// padding,
