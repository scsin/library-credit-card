let chai = require("chai");
let expect = chai.expect;
let index = require("../index");

describe("credit card lib", () => {
        it("lengthBelow", () => {
            expect(index.cardValidator("12345678912")).to.equal(false);
        });
        it("validCard", () => {
            expect(index.cardValidator("4442113856467633")).to.equal(true);
        });
        it("invalidCard", () => {
            expect(index.cardValidator("4442113856467634")).to.equal(false);
        });
        it("lengthAbove", () => {
            expect(index.cardValidator("12345678912345678901")).to.equal(false);
        });
});


// mouseless
// snippets