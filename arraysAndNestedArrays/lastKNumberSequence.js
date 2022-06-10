function lastKNumbersSequence(n, k) {
    let arr = [];
    let currArr = [];

    for (let i = 0; i < n; i++) {
        if (i < 2) {
            arr.push(1);
            continue;
        }
        currArr = arr.slice(-k);
        let sum = 0;
        for (let num of currArr) {
            sum += Number(num);
        }
        arr.push(sum);
    }
    return arr;
}