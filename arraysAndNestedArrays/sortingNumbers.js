function sortingNumbers(input) {
    let sorted = input.sort((a, b) => a - b);
    let takeNumbersFromHere = sorted.slice();
    let result = [];
    for (let i = 0; i < sorted.length; i += 2) {
        result.push(takeNumbersFromHere.shift());
        result.push(takeNumbersFromHere.pop());
    }
    return result;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);