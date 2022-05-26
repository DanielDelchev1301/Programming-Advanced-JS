function addAndRemoveElements(input) {
    let result = [];
    let counter = 1;
    for (let curr of input) {
        if (curr == 'add') {
            result.push(counter);
        } else if (curr == 'remove') {
            let _ = result.pop();
        }
        counter++;
    }
    if (result.length == 0) {
        console.log('Empty');
    } else {
        result.forEach(x => console.log(x));
    }
}
addAndRemoveElements(['remove','remove','remove']);