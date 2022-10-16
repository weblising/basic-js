const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {

  const minusIneIndexes = []
  const resArray = []
 arr.forEach((element , index)=>{
  if(element===-1){
      minusIneIndexes.push(index)
      return
  }
  resArray.push(element)

 })

 resArray.sort((a,b)=> a-b )

 minusIneIndexes.forEach((element)=>{
  resArray.splice(element, 0, -1);
 })

 

return resArray
}

module.exports = {
  sortByHeight
};
