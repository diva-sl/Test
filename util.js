const assert = require('assert');

const descStack = [];

const it = (name, block) => {
    const specs = descStack[descStack.length - 1];
    try {
        block();
    } catch (e) {
        specs.push({passed: false, name, e});
        return;
    }
    specs.push({passed: true, name});
};

const describe = (name, fn) => {
    descStack.push([]);
    fn();
    const output = descStack.pop();
    console.log(`Suite ${name}:`);
    console.log();
    output.forEach(output => {
        if (output.passed) {
            console.log(` Passed:   ${output.name}`);
            return;
        }
        console.log(` Failed:   ${output.name}`);
        console.log(`   ${output.e.id ? `At ${output.e.id}, ` : ''}error: ${output.e.message}`);
        console.log(`   ${output.e}`);
    });
    console.log();
    console.log(`Total Passed:\t${output.filter(x => x.passed).length}`);
    console.log(`Total Failed:\t${output.filter(x => !x.passed).length}`);
};

const equals = (id, actual, expected) => {
    try {
        assert.strictEqual(actual, expected);
    } catch (e) {
        e.id = id;
        throw e;
    }
};
const deepEquals = (id, actual, expected) => {
    try {
        assert.deepStrictEqual(actual, expected);
    } catch (e) {
        e.id = id;
        throw e;
    }
};
module.exports = {equals, deepEquals, describe, it};