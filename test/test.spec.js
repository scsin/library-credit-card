let chai = require("chai");
let expect = chai.expect;
let index = require("../lib/index");

describe("credit card lib", () => {
    describe("numbersLength", () => {
        // it("length11", () => {
        //     expect(testee.x("12345678912")).to.equal(11);
        // });
        // it("length", () => {
        //     expect(index.cardValidator("4847352989263094")).to.have.lengthOf.within(12, 19);
        // });
        it("true", () => {
            expect(index.cardValidator("4847352989263094")).to.equal(true);
        });
        // it("length12", () => {
        //     expect(testee.x("484735298926")).to.equal(12);
        // });
        // it("length13", () => {
        //     expect(testee.x("4847352989263")).to.equal(13);
        // });
        // it("length14", () => {
        //     expect(testee.x("48473529892630")).to.equal(14);
        // });
        // it("length15", () => {
        //     expect(testee.x("484735298926309")).to.equal(15);
        // });
        // it("length16", () => {
        //     expect(testee.x("4847352989263094")).to.equal(16);
        // });
        // it("length17", () => {
        //     expect(testee.x("48473529892630940")).to.equal(17);
        // });
        // it("length18", () => {
        //     expect(testee.x("484735298926309401")).to.equal(18);
        // });
        // it("length19", () => {
        //     expect(testee.x("4847352989263094012")).to.equal(19);
        // });
        // it("length20", () => {
        //     expect(testee.x("12345678912345678901")).to.equal(20);
        // });
    });
});



// chamar a função: require("chai")
// "pokemon.lib" é a biblioteca para testar
// "pokemonBattle" é a função a se testar
// cada teste é um it
// expect é o que se espera do resultado do teste

// rodar os testes -> bash -> comando: mocha

// mouseless
// snippets