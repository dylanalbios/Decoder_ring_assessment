// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution")


describe("substitution()", () => {

    describe("error handling", () => {
        it("should return false if the substitution alphabet is missing", () => {
            const input = "test";
            const alphabet = null;
            const expected = false;
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        });
        it("should return false if the substitution alphabet is not exactly 26 characters", () => {
            const input = "test";
            const alphabet = "asdf";
            const expected = false;
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        });
        it("should return false if the substitution alphabet does not contain unique characters", () => {
            const input = "test";
            const alphabet = "qzawxscdevrftbgnhymujkiolo";
            const expected = false;
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        });
    });

    describe("encoding a message", () => {
        it("should encode a message by using the given substitution alphabet", () => {
            const input = "thinkful";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const encode = true;
            const expected = "jrufscpw";
            const actual = substitution(input, alphabet, encode);
            expect(actual).to.equal(expected);
        });
        it("should work with any kind of key with unique characters", () => {
            const input = "test";
            const alphabet = "qzaw$xcdevrftbgnhy@#mkiolp";
            const encode = true;
            const expected = "#$@#";
            const actual = substitution(input, alphabet, encode);
            expect(actual).to.equal(expected);
        });
        it("should preserve spaces", () => {
            const input = "test spaces";
            const alphabet = "qzawxscdevrftbgnhymujkiolp";
            const encode = true;
            const expected = "uxmu mnqaxm";
            const actual = substitution(input, alphabet, encode);
            expect(actual).to.equal(expected);
        });
    });

    describe("decoding a message", () => {
        it("should decode a message by using the given substitution alphabet", () => {
            const input = "uxmu";
            const alphabet = "qzawxscdevrftbgnhymujkiolp";
            const encode = false;
            const expected = "test";
            const actual = substitution(input, alphabet, encode);
            expect(actual).to.equal(expected);
        });
        it("should work with any kind of key with unique characters", () => {
            const input = "#$@#";
            const alphabet = "qzaw$xcdevrftbgnhy@#mkiolp";
            const encode = false;
            const expected = "test";
            const actual = substitution(input, alphabet, encode);
            expect(actual).to.equal(expected);
        });
        it("should preserve spaces", () => {
            const input = "uxmu mnqaxm";
            const alphabet = "qzawxscdevrftbgnhymujkiolp";
            const encode = false;
            const expected = "test spaces";
            const actual = substitution(input, alphabet, encode);
            expect(actual).to.equal(expected);
        });
    });
});