function processOddNumbers(arr) {
    let processedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            processedArr.unshift(arr[i] * 2);
        }
    }
    console.log(processedArr.join(' '));
}