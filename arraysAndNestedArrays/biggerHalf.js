function biggerHalf(array) {
    array.sort((a, b) => a - b);
    let middle = Math.floor(array.length / 2);
    let result = array.slice(middle, array.length);
    return result;
}
biggerHalf([4, 7, 2, 5]);
console.log('---');
biggerHalf([3, 19, 14, 7, 2, 19, 6]);