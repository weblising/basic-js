const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  value:[],
  getLength() {
    return this.value.length
  },
  addLink(val = '') {
   this.value.push(val)
   return this  
  },
  removeLink(position) { 
    let positionsArr = this.value.map((element , index)=>{
      return index + 1
    })
    if(positionsArr.indexOf(position)!== -1){
        this.value.splice(position-1, 1)
        return this
    }      
     else{
          this.value =[]
          const error = new Error('You can\'t remove incorrect link!');
          throw error          
      } 
  
  },
  reverseChain() {
    if(this.value){
      this.value.reverse()
    }   
    return this  
  },
  finishChain() {
   let valueString = ''
   this.value.forEach((element , index)=>{       

      if(index===this.value.length - 1){
          valueString+=`( ${element} )`
          return
      }
      valueString+=`( ${element} )~~`
   })
   this.value =[]
   return valueString
  }
};

module.exports = {
  chainMaker
};
