let chai = require("chai");
let expect = chai.expect;
let index = require("../lib/index");

describe("credit card lib", () => {
        it("lengthBelow", () => {
            expect(index.cardValidator("12345678912")).to.equal(false);
        });
        it("validCard", () => {
            expect(index.cardValidator("4847352989263094")).to.equal(100);
        });
        it("invalidCard", () => {
            expect(index.cardValidator("4847352989263095")).to.not.equal(100);
        });
        it("lengthAbove", () => {
            expect(index.cardValidator("12345678912345678901")).to.equal(false);
        });
});


// mouseless
// snippets