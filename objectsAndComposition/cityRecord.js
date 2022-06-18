function cityRecord(city, population, treasury) {
    let cityBook = {
        name: city,
        population,
        treasury
    };
    return cityBook;
}
cityRecord('Tortuga',
    7000,
    15000);