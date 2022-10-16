const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

 class DepthCalculator {
  

  calculateDepth(arr) {

    let deepCounter = 1

    for (let inner of arr) {
      let innerCounter = 1

      if (Array.isArray(inner)) {
          innerCounter += this.calculateDepth(inner);
        if (innerCounter > deepCounter) {
          deepCounter = innerCounter
        }
      }
    }
     
    return deepCounter
  
  }
  
}

module.exports = {
  DepthCalculator
};
