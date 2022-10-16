const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {

   constructor (direction) {
      this.direction = true
      if (direction === false){
         this.direction = false
      } 
   }
         
 alphabetArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
 
crypt(phrase , key, func){

   if(!phrase || !key){
      throw new Error('Incorrect arguments!')
   } 
   const alphabetArr = this.alphabetArr   
   phrase = phrase.toLowerCase()
   key = key.toLowerCase()  

   const stringSplitter = (word)=>{
    return word.split('').map((element ,index)=>{
      if(this.alphabetArr.indexOf(element)!==-1){
         return alphabetArr.indexOf(element)
      }
      return element    
      })
   }

   const phraseArr = stringSplitter(phrase),
         keyArr = stringSplitter(key)
 
   let encryptPhrase = [],
         alphabetIndex=0
   
   for(let i=0, j=0; i<phraseArr.length; i++ , j++){

      if(Number.isInteger(phraseArr[i])){     
         if(j > keyArr.length - 1){
            j=0
         }

         if(func==='encrypt'){
            alphabetIndex = phraseArr[i] + keyArr[j]
            if(alphabetIndex > alphabetArr.length - 1){
               alphabetIndex = alphabetIndex % alphabetArr.length
            }
         }else if(func==='decrypt'){
            alphabetIndex = phraseArr[i] - keyArr[j]
   
            if(alphabetIndex < 0){
            alphabetIndex = alphabetArr.length + alphabetIndex
            }
         }   
          
         encryptPhrase.push(alphabetArr[alphabetIndex]) 
      
      }else{
         encryptPhrase.push(phraseArr[i])
         j--        
      } 
   }

   if(this.direction === false){
      encryptPhrase = encryptPhrase.reverse().join('').toUpperCase()
      return encryptPhrase
   }
 
 encryptPhrase = encryptPhrase.join('').toUpperCase()
 return encryptPhrase
}

 encrypt(phrase , key){
   return this.crypt(phrase , key, 'encrypt') 
 } 
 
 decrypt(phrase , key) {  
   return this.crypt(phrase , key, 'decrypt') 
 } 
} 

module.exports = {
  VigenereCipheringMachine
};
