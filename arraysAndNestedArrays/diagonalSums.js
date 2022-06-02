function diagonalSums(nestedArray) {
    let first = 0;
    let second = 0;
    let counter = 0;
    let reverseCounter = nestedArray.length - 1;
    for (let arr of nestedArray) {
        first += arr[counter];
        second += arr[reverseCounter];
        counter++;
        reverseCounter--;
    }
    console.log(first, second);
}
diagonalSums([[20, 40, 10],
              [10, 60, 30],
              [50, 90, 100]]);