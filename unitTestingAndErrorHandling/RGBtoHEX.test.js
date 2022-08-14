const { expect } = require('chai');
const rgbToHexColor = require('./RGBtoHEX');
describe('Test colorCreator function', () => {
    it('when input is not an integer', () => {
        expect(rgbToHexColor('black', 'white', 'red')).to.be.undefined;
        expect(rgbToHexColor(1, null, '5')).to.be.undefined;
        expect(rgbToHexColor(12, 0, NaN)).to.be.undefined;
        expect(rgbToHexColor(undefined)).to.be.undefined;
        expect(rgbToHexColor([], [], [])).to.be.undefined;
        expect(rgbToHexColor({})).to.be.undefined;
    });
    it('when passed integers are not in range', () => {
        expect(rgbToHexColor(-1, 300, -21)).to.be.undefined;
        expect(rgbToHexColor(10, 249, -102)).to.be.undefined;
        expect(rgbToHexColor('1', -200, 26)).to.be.undefined;
    });
    it('if return the same color in hexadecimal format', () => {
        expect(rgbToHexColor(165, 87, 49)).to.equal('#A55731');
        expect(rgbToHexColor(49, 165, 146)).to.equal('#31A592');
    });
    it('if input parameters are in the end of the range', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
});