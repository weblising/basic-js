const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits( n ) {



  const getSumRec = (number)=>{
      number+=''       
    
      if(number.length < 2){
          return result
      }

      result = 0

      for(i=0; i<number.length; i++){
          let dig = number[i]*1          
          result+= dig
      }          

     getSumRec(result)  

     return result 

   
} 

return getSumRec(n) 
}

module.exports = {
  getSumOfDigits
};
