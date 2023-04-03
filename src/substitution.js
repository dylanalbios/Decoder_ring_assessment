// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here


    //return false if alphabet is not valid
    if (!alphabet) return false;
    if (alphabet.length !== 26) return false;
    const alphaSet = new Set(alphabet.split(""));
    if (alphaSet.size !== 26) return false;



    const standardAlpha = "abcdefghijklmnopqrstuvwxyz";
    
    const result = [];
 
    //split the input and alphabet into arrays with each individual character

    const inputArr = input.toLowerCase().split("");
    const alphaArr = alphabet.split("");


    //loop through each character in the input array
    for (let i = 0; i < inputArr.length; i++) {

      //if therers a space, push it to the result as is
      if (inputArr[i] === " ") {
        result.push(" ");
        
      } else {

        // find index and use the encode or decode array
        const index = encode ? standardAlpha.indexOf(inputArr[i]) : alphaArr.indexOf(inputArr[i]);

        //use index to find the corresponding letter whether encoding or decoding
        const letter = encode ? alphaArr[index] : standardAlpha[index];
        result.push(letter);
        
      }
    }

    return result.join("");
    
  }
  
  
  
  
  

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
