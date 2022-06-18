function cityTaxes(city, population, treasury) {
    let cityBook = {
        name: city,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            return this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            percentage = (percentage / 100) + 1;
            return this.population *= percentage;
        },
        applyRecession(percentage) {
            percentage = 1 - (percentage / 100);
            return this.treasury *= percentage; 
        }
    }
    return cityBook;
}
const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);