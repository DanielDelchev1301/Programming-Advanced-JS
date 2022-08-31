const { it } = require('mocha');
const { expect } = require('chai');
const sum = require('./sumOfNumbers');
describe('Test sum function', () => {
    it('to return the right sum of the array', () => {
        let expectedSum = 100;
        let array = [10, 20, 30, 40];
    
        let actualSum = sum(array);
    
        expect(actualSum).to.equal(expectedSum);
    });
    it('if parse the numbers from string', () => {
        let expectedSum = 100;
        let array = ['10', 20, '30', 40];
    
        let actualSum = sum(array);
    
        expect(actualSum).to.equal(expectedSum);
    });
    it('to return the right sum of the array with values less than zero', () => {
        let expectedSum = 40;
        let array = [10, 20, -30, 40];
    
        let actualSum = sum(array);
    
        expect(actualSum).to.equal(expectedSum);
    });
    it('with zeros only', () => {
        let expectedSum = 0;
        let array = [0, 0, 0 ,0 ,0];
    
        let actualSum = sum(array);
    
        expect(actualSum).to.equal(expectedSum);
    });
});