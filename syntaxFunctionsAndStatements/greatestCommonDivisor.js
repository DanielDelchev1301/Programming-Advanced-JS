function  greatestCommonDivisor(first, second) {
    for (let i = second; i >= 0; i--) {
        if (first % i == 0 && second % i == 0) {
            console.log(i);
            break;
        }
    }
}
greatestCommonDivisor(2154, 458);