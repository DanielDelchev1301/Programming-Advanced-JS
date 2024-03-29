class Hex {
    constructor(value) {
        this.value = Number(value);
    }
    valueOf() {
        return this.value;
    }
    toString() {
        let hex = this.value.toString(16).toUpperCase();
        return `0x${hex}`;
    }
    plus(input) {
        if (typeof input == 'object') {
            let result = this.value + input.value;
            return new Hex(result);
        } else {
            let result = this.value + input;
            return new Hex(result);
        }
    }
    minus(input) {
        if (typeof input == 'object') {
            let result = this.value - input.value;
            return new Hex(result);
        } else {
            let result = this.value - input;
            return new Hex(result);
        }
    }
    parse(string) {
        let number = parseInt(string, 16);
        return number;
    }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));