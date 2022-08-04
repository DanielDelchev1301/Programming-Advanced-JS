const { expect } = require('chai');
const lookupChar = require('./charLookup');
describe('Test lookupChar function', () => {
    it('when first parameter is not a string', () => {
        expect(lookupChar(null, 2)).to.be.undefined;
    });
    it('when second parameter is not a number', () => {
        expect(lookupChar('string', '2')).to.be.undefined;
    });
    it('when both paremeter are of the incorrect type', () => {
        expect(lookupChar(NaN, undefined)).to.be.undefined;
    });
    it('when second parameter is floating-point number', () => {
        expect(lookupChar('string', 1.2)).to.be.undefined;
    });
    it('when both parameters are of the correct type but the value of the index is incorrect', () => {
        expect(lookupChar('string', -1)).to.equal('Incorrect index');
        expect(lookupChar('string', 6)).to.equal('Incorrect index');
    });
    it('when everything is fine and have to work perfect', () => {
        expect(lookupChar('string', 0)).to.equal('s');
        expect(lookupChar('string', 3)).to.equal('i');
    });
});