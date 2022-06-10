function negativeOrPositive(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num < 0) {
            newArr.unshift(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join('\n'));
}