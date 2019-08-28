const test = (exp, act, msg) => {
 if(exp !== act) {
  throw `${msg} \n Expected: ${exp}, but got: ${act}`;
 }
}

module.exports = { test };