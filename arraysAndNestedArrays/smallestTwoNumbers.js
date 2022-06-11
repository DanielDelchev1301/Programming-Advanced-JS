function smallestTwoNumbers(arr) {
    let sortedInAscendingOrder = arr.sort((a, b) => a - b);
    let slicedAndSorted = sortedInAscendingOrder.slice(0, 2);
    console.log(slicedAndSorted.join(' '));
}