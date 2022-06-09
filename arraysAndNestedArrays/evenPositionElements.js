function evenPositionElements(array) {
    let evenElements = [];
    array.forEach((x, i) => {
        if (i % 2 == 0) {
            evenElements.push(x);
        }
    });
    console.log(evenElements.join(' '));
}
evenPositionElements(['20', '30', '40', '50', '60']);