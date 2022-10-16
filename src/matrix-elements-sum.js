const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let result = 0
  let matrSize = matrix.length

  matrix.forEach((arr , arrIndex)=>{
  
   arr.forEach((elem , elIndex)=>{
       if(arrIndex===0){
           result+= elem
           return
       }
  
       if(matrix[arrIndex - 1][elIndex] !==0){
           result+= elem
       }
   })


  })

  return result

 }

module.exports = {
  getMatrixElementsSum
};
