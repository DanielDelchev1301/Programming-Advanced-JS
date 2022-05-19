function aggregateElements(input) {
    let sumOfAll = 0;
    let sumIfInverse = 0;
    let concat = '';
    for (let num of input) {
        sumOfAll += num;
        sumIfInverse += 1 / num;
        concat += num;
    }
    console.log(sumOfAll);
    console.log(sumIfInverse);
    console.log(concat);
}
aggregateElements([1, 2, 3]);