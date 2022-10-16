const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let resString = '',
      codeDigit = 1

 for(let i =0; i<str.length ; i++){
 let key = str[i]

   if(key=== str[i + 1]){
     codeDigit++
   }else{
     if( codeDigit > 1){
       resString+= codeDigit + key
     }else{
       resString+= key
     }      
     codeDigit = 1

   }
   
 }
 return resString
}

module.exports = {
  encodeLine
};
