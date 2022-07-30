function sortArray(array, string) {
    if (string == 'asc') {
        array.sort((a, b) => a - b);
    } else if (string == 'desc') {
        array.sort((a, b) => b - a);
    }
    return array;
}
sortArray([14, 20, 100, 7, 17, 6, 8], 'asc');