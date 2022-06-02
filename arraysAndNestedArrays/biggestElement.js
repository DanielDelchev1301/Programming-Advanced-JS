function biggestElement(nestedArray) {
    let biggest = [];
    for (let arr of nestedArray) {
        biggest.push(arr.sort((a, b) => b - a)[0]);
    }
    return biggest.sort((a, b) => b - a)[0];
}
biggestElement([[20, 50, 10],
[8, 33, 145]]);