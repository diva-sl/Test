const assert = require('assert');

const test = (exp, act, msg) => {
    if (exp !== act) {
        throw `Failed:\t${msg} \n\tExpected: ${exp}, but got: ${act}`;
    }
    console.log(`Passed:\t${msg}`);
};
const testDeep = (actual, expected, name) => {
    try {
        assert.deepStrictEqual(actual, expected);
    } catch (e) {
        console.log(`Failed:\t${name}\n Expected ---> ${e.message} <--- Actual`);
        throw e;
    }
    console.log(`Passed:\t${name}`);
};
module.exports = {test, testDeep};