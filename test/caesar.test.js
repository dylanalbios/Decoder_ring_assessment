// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar")

describe("caesar()", () => {

  describe("error handling", () => {

    it("should return false if shift value is 0", () => {
        const input = "test";
        const shift = 0;
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it("should return false if shift value less than -25", () => {
        const input = "test";
        const shift = -26;
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it("should return false if shift value is greater than 25", () => {
        const input = "test";
        const shift = 26;
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it("should return false if shift value is not present", () => {
        const input = "test";
        const shift = null;
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
  });


  describe("encoding a message", () => {
    it("should enocde a message by shifting the letters", () => {
        const input = "test";
        const shift = 3;
        const expected = "whvw";
        const encode = true;
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
    it("should leaves spaces and other symbols as is", () => {
        const input = "testing spaces 123";
        const shift = 3;
        const expected = "whvwlqj vsdfhv 123";
        const encode = true;
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const input = "TeSt";
        const shift = 3;
        const expected = "whvw";
        const encode = true;
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
    it("should appropriately handle letters at the end of the alphabet", () => {
        const input = "xyz";
        const shift = 3;
        const expected = "abc";
        const encode = true;
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
    it("should allow for a negative shift that will shift to the left", () => {
        const input = "test";
        const shift = -3;
        const expected = "qbpq";
        const encode = true;
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
  });


  describe("decoding a message", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
        const input = "whvw";
        const shift = 3;
        const expected = "test";
        const encode = false;
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
    it("should leaves spaces and other symbols as is", () => {
        const input = "whvwlqj vsdfhv 123";
        const shift = 3;
        const expected = "testing spaces 123";
        const encode = false;
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const input = "WhVw";
        const shift = 3;
        const expected = "test";
        const encode = false;
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
    it("should appropriately handle letters at the end of the alphabet", () => {
        const input = "abc";
        const shift = 3;
        const expected = "xyz";
        const encode = false;
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
    it("should allow for a negative shift that will shift to the left", () => {
        const input = "qbpq";
        const shift = -3;
        const expected = "test";
        const encode = false;
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
  });

});

