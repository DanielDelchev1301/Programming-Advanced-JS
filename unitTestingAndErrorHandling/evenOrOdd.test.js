const { expect } = require('chai');
const isOddOrEven = require('./evenOrOdd');
describe('Test isOddOrEven function', () => {
    it('when input is different than string', () => {
        expect(isOddOrEven(undefined)).to.be.undefined;
        expect(isOddOrEven(null)).to.be.undefined;
        expect(isOddOrEven(NaN)).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
        expect(isOddOrEven(0)).to.be.undefined;
    });
    it('when string length is even', () => {
        expect(isOddOrEven('Daniel')).to.equal('even');
    });
    it('when string length is odd', () => {
        expect(isOddOrEven('gosho')).to.equal('odd');
    });
});