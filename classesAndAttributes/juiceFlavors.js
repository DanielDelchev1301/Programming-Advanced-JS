function juiceFlavors(juicesData) {
    let juicesBook = {};
    let resultBottles = {};
    for (let line of juicesData) {
        let [fruit, quantity] = line.split(' => ');
        if (juicesBook.hasOwnProperty(fruit) == false) {
            juicesBook[fruit] = 0;
        }
        juicesBook[fruit] += Number(quantity);
        while (juicesBook[fruit] >= 1000) {
            if (resultBottles.hasOwnProperty(fruit) == false) {
                resultBottles[fruit] = 0;
            }
            resultBottles[fruit]++;
            juicesBook[fruit] -= 1000;
        }
    }
    for (let fruit in resultBottles) {
        console.log(`${fruit} => ${resultBottles[fruit]}`);
    }
}
juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);