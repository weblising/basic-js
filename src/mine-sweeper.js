const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  const gameSetup = []
  
  matrix.forEach((row , rowIndex)=>{
  
      gameSetup[rowIndex] = []
  
      row.forEach((_ , colIndex)=>{
  
          let value = 0
    
          if (matrix[rowIndex][colIndex + 1]) { value++ }
          if (matrix[rowIndex][colIndex - 1]) { value++ }
    
          if (rowIndex + 1 in matrix) {
            if (matrix[rowIndex + 1][colIndex - 1]) { value++ }
            if (matrix[rowIndex + 1][colIndex]) { value++ }
            if (matrix[rowIndex + 1][colIndex + 1]) { value++ }
          }
    
          if (rowIndex - 1 in matrix ) {
            if (matrix[rowIndex - 1][colIndex - 1]) { value++ }
            if (matrix[rowIndex - 1][colIndex]) { value++ }
            if (matrix[rowIndex - 1][colIndex + 1]) { value++ }
          }
    
          gameSetup[rowIndex][colIndex] = value
  
      })
  
  })
  
  
  
  return gameSetup
  
  }

module.exports = {
  minesweeper
};
