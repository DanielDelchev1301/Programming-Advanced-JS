function extractIncreasingSubset(input) {
    let flag = true;
    let result = [];
    for (let curr of input) {
        if (flag) {
            result.push(curr);
            flag = false;
            continue;
        }
        if (curr >= result[result.length - 1]) {
            result.push(curr);
        }
    }
    return result;
}
extractIncreasingSubset([20,3,2,15]);