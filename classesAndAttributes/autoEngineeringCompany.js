function autoEngineeringCompany(carsData) {
    let carBook = {};
    for (let line of carsData) {
        let [brand, model, quantity] = line.split(' | ');
        if (!carBook.hasOwnProperty(brand)) {
            carBook[brand] = {};
        }
        if (!carBook[brand].hasOwnProperty(model)) {
            carBook[brand][model] = 0;
        }
        carBook[brand][model] += Number(quantity);

    }
    for (let brand in carBook) {
        console.log(brand);
        for (let model in carBook[brand]) {
            console.log(`###${model} -> ${carBook[brand][model]}`);
        }
    }
}
autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);