function sumOfNumbers(num1, num2) {
    let first = Number(num1);
    let second = Number(num2);
    let result = 0;
    for (let i = first; i <= second; i++) {
        result += i;
    }
    return result;
}
sumOfNumbers('-8', '20');