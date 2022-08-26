const expect = require('chai').expect;
const subSum = require('./subSum');
describe('Test subSum function', () => {
    it('endIndex have not be larger than length', () => {
        //Arrange
        let expectedSum = 150;
        let array = [10, 20, 30, 40, 50, 60];
        let startIndex = 3;
        let endIndex = 300;
        //Act
        let actualSum = subSum(array, startIndex, endIndex);
        //Assert
        expect(actualSum).to.equal(expectedSum);
    });
    it('startIndex have not be less than 0', () => {
          let expectedSum = 100;
          let array = [10, 20, 30, 40, 50, 60];
          let startIndex = -12;
          let endIndex = 3;
          
          let actualSum = subSum(array, startIndex, endIndex);
    
          expect(actualSum).to.equal(expectedSum); 
    });
})