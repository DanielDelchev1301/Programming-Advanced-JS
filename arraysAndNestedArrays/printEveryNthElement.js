function printEveryNthElement(array, step) {
    let result = [];
    for (let i = 0; i < array.length; i += step) {
        result.push(array[i]);
    }
    return result;
}
printEveryNthElement(['5',
    '20',
    '31',
    '4',
    '20',
    '10',
    '15',
    '30',
    '1'],
    2);