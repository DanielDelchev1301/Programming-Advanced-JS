function storeCatalogue(input) {
    let storeBook = {};
    for (let line of input) {
        let [product, price] = line.split(' : ');
        storeBook[product] = Number(price);
    }
    let keys = Object.keys(storeBook);
    keys = keys.sort((a, b) => a.localeCompare(b));
    let char = keys[0][0];
    let isFirst = true;
    let flag = true;
    for (let product of keys) {
        if (flag) {
            if (isFirst) {
                console.log(char);
                isFirst = false;
            }
            flag = false;
        }
        if (char != product[0]) {
            flag = true;
            char = product[0];
            console.log(char);
        }
        console.log(`${product}: ${storeBook[product]}`);
    }
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);