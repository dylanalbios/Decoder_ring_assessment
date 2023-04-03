// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here

    //checks for if the shift is outside of the range or not present
    if (shift === 0 || shift < -25 || shift > 25 || !shift) {
      return false
    }

    //for index shifting
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    // will handle changing the shift for encoding and decoding
    if (encode === false) {
      shift = -shift;
    }

    //split input
    const inputArr = input.toLowerCase().split("");
    
    //makes sure to only change letters
    const resultArr = inputArr.map((letter) => {

      if (!alphabet.includes(letter)) {
        return letter;
      }

      //matches index to alphabet
      const index = alphabet.indexOf(letter);

      //performs the shift and handles the loop to the beginning/end
      let shiftedIndex = (index + shift) % 26;
      if (shiftedIndex < 0) {
        shiftedIndex += 26;
      }

      return alphabet[shiftedIndex]
    })
    return resultArr.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
