// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here


    const polybiusTable = {
      a: "11", b: "21", c: "31", d: "41", e: "51",
      f: "12", g: "22", h: "32", i: "42", j: "42",
      k: "52", l: "13", m: "23", n: "33", o: "43",
      p: "53", q: "14", r: "24", s: "34", t: "44",
      u: "54", v: "15", w: "25", x: "35", y: "45",z: "55",
    };
  
    //swaps the keys and values
    const flipTable = {};
    for (let key in polybiusTable) {
      flipTable[polybiusTable[key]] = key;
    }
  
    //gets rid of capitals
    const message = input.toLowerCase();
  
    //for encoding
    if (encode) {
      let result = "";
      for (let letter of message) {

        //if theres a space, leave it
        if (letter === " ") {
          result += " ";
        } else {
          //add the number from the letter into the result
          result += polybiusTable[letter];
        }
      }
      return result;

    //for decoding

    } else {

      //string replace for counting numbers and not spaces
      //if uneven retrun false

      if (message.replace(/ /g, "").length % 2 !== 0) return false;
      let result = "";
      //loop through each pair
      for (let i = 0; i < message.length; i += 2) {
        //preserve sapces
        if (message[i] === " ") {
          result += " ";
          //go back one
          i--;
        } else {
          //bring pairs together
          let pair = message[i] + message[i + 1];
          if (pair === "42") {
            result += "(i/j)";
          } else {
            //add letter from the pair into the result
            result += flipTable[pair];
          }
        }
      }
    return result;
    }
  }
  
  
  
    
    

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
