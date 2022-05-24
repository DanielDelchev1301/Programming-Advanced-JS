function mathOperations(first, second, operator) {
    if (operator == '+') {
        console.log(first + second);
    } else if (operator == '-') {
        console.log(first - second);
    } else if (operator == '*') {
        console.log(first * second);
    } else if (operator == '/') {
        console.log(first / second);
    } else if (operator == '%') {
        console.log(first % second);
    } else if (operator == '**') {
        console.log(first ** second);
    }
}
mathOperations(5, 6, '**');