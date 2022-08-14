const { expect } = require('chai');
const mathEnforcer = require('./mathEnforcer');
describe('mathEndorcer', () => {
    describe('Test addFive function', () => {
        it('when input is not a number', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
            expect(mathEnforcer.addFive(null)).to.be.undefined;
            expect(mathEnforcer.addFive(undefined)).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
        });
        it('when input is positive number', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it('when input is negative number', () => {
            expect(mathEnforcer.addFive(-12)).to.equal(-7);
        });
        it('when input is floating number', () => {
            expect(mathEnforcer.addFive(5.2)).to.equal(10.2, 0.01);
        });
    });

    describe('Test subtractTen function', () => {
        it('when input is not a number', () => {
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
            expect(mathEnforcer.subtractTen(null)).to.be.undefined;
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
        });
        it('when input is positive number', () => {
            expect(mathEnforcer.subtractTen(21)).to.equal(11);
        });
        it('when input is negative number', () => {
            expect(mathEnforcer.subtractTen(-20)).to.equal(-30);
        });
        it('when input is floating number', () => {
            expect(mathEnforcer.subtractTen(5.2)).to.equal(-4.8, 0.01);
        });
    });

    describe('Test sum function', () => {
        it('when first/second or both parameters are not a number/s', () => {
            expect(mathEnforcer.sum('5', 10)).to.be.undefined;
            expect(mathEnforcer.sum(null, 10)).to.be.undefined;
            expect(mathEnforcer.sum(undefined, 'gosho')).to.be.undefined;
            expect(mathEnforcer.sum(10, [])).to.be.undefined;
            expect(mathEnforcer.sum(10, {})).to.be.undefined;
        });
        it('when both parameters are positive numbers', () => {
            expect(mathEnforcer.sum(10, 20)).to.equal(30);
        });
        it('when both parameters are negative numbers', () => {
            expect(mathEnforcer.sum(-5, -32)).to.equal(-37);
        });
        it('when both parameters are floating positive numbers', () => {
            expect(mathEnforcer.sum(10.2, 5.1)).to.be.closeTo(15.3, 0.01);
        });
        it('when both parameters are floating negative numbers', () => {
            expect(mathEnforcer.sum(-10.7, -5.1)).to.be.closeTo(-15.8, 0.01);
        });
    });
});