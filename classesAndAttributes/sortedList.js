class List {
    constructor() {
        this.numbersList = [];
        this.size = this.numbersList.length;
    }
    add(element) {
        if (Number(element) != NaN) {
            this.numbersList.push(Number(element));
        }
        this.size = this.numbersList.length;
        this.numbersList.sort((a, b) => a - b);
    }
    remove(index) {
        if (index >= 0 && index < this.numbersList.length) {
            let deleted = this.numbersList.splice(index, 1);
        } else {
            throw new Error('Index is outside the array length');
        }
        this.size = this.numbersList.length;
        this.numbersList.sort((a, b) => a - b);
    }
    get(index) {
        if (index >= 0 && index < this.numbersList.length) {
            return this.numbersList[index];
        } else {
            throw new Error('Index is outside the array length');
        }
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));