function townPopulation(input) {
    let populationBook = {};
    for (let line of input) {
        let [town, population] = line.split(' <-> ');
        if (populationBook.hasOwnProperty(town) == false) {
            populationBook[town] = 0;
        }
        populationBook[town] += Number(population);
    }
    let keys = Object.keys(populationBook);
    keys.forEach(x => console.log(`${x} : ${populationBook[x]}`));
}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);