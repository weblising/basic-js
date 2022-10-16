const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 countCats = (catsArr)=>{
  let catCounter = 0
  
  const findCat = (el)=>{
      if(el==='^^'){
          catCounter++
      }
  }

  catsArr.forEach((elem)=>{

      function arrReccur(elem){

      if(!Array.isArray(elem) ){            
          findCat(elem)
          return
      }

      elem.forEach((elem)=>{
          arrReccur(elem)
      })      


      }
    
  arrReccur(elem)
  

  })   
  
 
return catCounter

}


module.exports = {
  countCats
};
