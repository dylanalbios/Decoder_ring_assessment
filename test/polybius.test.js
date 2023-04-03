// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius")

describe("polybius()", () => {
    describe("encoding a message", () => {
        it("should encode a message by translating each letter to number pairs", () => {
            const input = "test";
            const expected = "44513444";
            const actual = polybius(input);
            expect(actual).to.equal(expected);
        });
        it("should translate both 'i' and 'j' to 42", () => {
            const input = "justify";
            const expected = "42543444421245";
            const actual = polybius(input);
            expect(actual).to.equal(expected);
        });
        it("should leave spaces as is", () => {
            const input = "test spaces";
            const expected = "44513444 345311315134";
            const actual = polybius(input);
            expect(actual).to.equal(expected);
        });
    });

    describe("decoding a message", () => {
        it("should decode a message by translating each pair of numbers into a letter", () => {
            const input = "44513444";
            const expected = "test";
            const encode = false;
            const actual = polybius(input, encode);
            expect(actual).to.equal(expected);
        });
        it("should translate 42 to both 'i' and 'j'", () => {
            const input = "44513444423322";
            const expected = "test(i/j)ng";
            const encode = false;
            const actual = polybius(input, encode);
            expect(actual).to.equal(expected);
        });
        it("should leave spaces as is", () => {
            const input = "44513444 345311315134";
            const expected = "test spaces";
            const encode = false;
            const actual = polybius(input, encode);
            expect(actual).to.equal(expected);
        });
        it("should return false if the length of all numbers is odd", () => {
            const input = "444";
            const expected = false;
            const encode = false;
            const actual = polybius(input, encode);
            expect(actual).to.equal(expected);
        });
    });
});