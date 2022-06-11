function rotateArray(input, rotations) {
    for (let i = 0; i < rotations; i++) {
        input.unshift(input.pop());
    }
    console.log(input.join(' '));
}
rotateArray(['1',
    '2',
    '3',
    '4'],
    2);
console.log('---');
rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15);