const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  n +=''
  n = n.split('')   
  let i=0 

while(n[i]>= n[i + 1]){  
 i++
}
n.splice(i, 1)
n=n.join('')
return n*1
}


module.exports = {
  deleteDigit
};
