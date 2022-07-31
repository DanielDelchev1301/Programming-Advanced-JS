const { expect } = require('chai');
const createCalculator = require('./addSubtract');
describe('Test createCalculator function', () => {
    it('if return an object with specified properties when its called', () => {   
        expect(createCalculator()).to.be.an('object').to.have.own.property('add');
        expect(createCalculator()).to.be.an('object').to.have.own.property('subtract');
        expect(createCalculator()).to.be.an('object').to.have.own.property('get');
    });
    it('to add integer to value', () => {
        let func = createCalculator();
        func.add(5);
        expect(func.get()).to.equal(5);
    });
    it('to add integer when its string to value', () => {
        let func = createCalculator();
        func.add('5');
        expect(func.get()).to.equal(5);
    });
    it('to subtract integer to value', () => {
        let func = createCalculator();
        func.subtract(5);
        expect(func.get()).to.equal(-5);
    });
    it('to subtract integer when its string to value', () => {
        let func = createCalculator();
        func.subtract('5');
        expect(func.get()).to.equal(-5);
    });
});