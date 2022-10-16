const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

 function repeater(str, options) {
  let{repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options
  let resString = ''
  repeaterInner = (str , repeatTimes=1, separator ='+' , addition = '', additionRepeatTimes = 1, additionSeparator = '|')=>{
     
 
 for(let i=0; i<repeatTimes; i++){
  resString+= str

  for(let iAddit = 0; iAddit<additionRepeatTimes;  iAddit++){
      if(iAddit<additionRepeatTimes-1 ){
          resString+=addition + additionSeparator 
      }else{
          resString+=addition 
      }
      
  }
  if(i<repeatTimes-1 ){
      resString+= separator
  }
  
 }
  



  }
 
  repeaterInner(str , repeatTimes, separator, addition, additionRepeatTimes, additionSeparator)

 // console.log(resString)
  return resString
 
}

module.exports = {
  repeater
};
