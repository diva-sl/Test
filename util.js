const test = (exp, act, msg) => {
 if(exp !== act) {
  throw `Failed:\t${msg} \n\tExpected: ${exp}, but got: ${act}`;
 }
 console.log(`Passed:\t${msg}`);
}

module.exports = { test };