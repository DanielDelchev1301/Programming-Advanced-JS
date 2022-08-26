function subSum(array, start, end) {
    if (!Array.isArray(array)) {
        return NaN;
    }
    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, array.length - 1);
    let result = array.slice(startIndex, endIndex + 1)
        .map(x => {return Number(x)})
        .reduce((acc, x) => {return acc + x}, 0);
    return result;
}
module.exports = subSum;