const { expect } = require('chai');
const isSymmetric = require('./checkForSymmetry');
describe('Test isSymmetric function', () => {
    it('if input is not an array', () => {
        expect(isSymmetric(1)).to.be.false;
        expect(isSymmetric('1')).to.be.false;
        expect(isSymmetric(-1)).to.be.false;
        expect(isSymmetric(NaN)).to.be.false;
        expect(isSymmetric(undefined)).to.be.false;
        expect(isSymmetric(null)).to.be.false;
        expect(isSymmetric({})).to.be.false;
    });
    it('if return TRUE when the input array is symmetric numbers', () => {
        expect(isSymmetric([1,2,3,2,1])).to.be.true;
        expect(isSymmetric([0,0,0,0])).to.be.true;
    });
    it('if return TRUE when the input array is symmetric strings', () => {
        expect(isSymmetric(['gosho', 'pesho', 'gosho'])).to.be.true;
        expect(isSymmetric(['pesho', 1, 2, 1, 'pesho'])).to.be.true;
    });
    it('if return FLASE when the input array is not symmetric numbers', () => {
        expect(isSymmetric([1,2,3,4,5])).to.be.false;
        expect(isSymmetric([0,0,1,0])).to.be.false;
    });
    it('if return FLASE when the input array is not symmetric strings', () => {
        expect(isSymmetric(['gosho', 'pesho', 'gosho', 'daniel'])).to.be.false;
        expect(isSymmetric(['pesho', -1, 2, 1, 'pesho'])).to.be.false;
    });
    it('if return TRUE when the input array is symmetric objects', () => {
        expect(isSymmetric([{},{},{},{},{}])).to.be.true;
    })
});