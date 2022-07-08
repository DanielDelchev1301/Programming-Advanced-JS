function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    
    function onClick() {
        let input = JSON.parse(document.querySelector('#inputs textarea').value);
        let bestRestaurantElement = document.querySelector('#bestRestaurant p');
        let bestWorkersElement = document.querySelector('#workers p');
        let averageSalary = 0;
        let bestSalary = 0;
        let bestRestaurant = '';
        let restaurantBook = {};
        for (let line of input) {
            let [restaurantName, rest] = line.split(' - ');
            let workersAndSalaries = rest.split(', ');
            for (let currLine of workersAndSalaries) {
                let [worker, salary] = currLine.split(' ');
                if (restaurantBook.hasOwnProperty(restaurantName) == false) {
                    restaurantBook[restaurantName] = {};
                }
                restaurantBook[restaurantName][worker] = Number(salary);
            }
        }
        let entries = Object.entries(restaurantBook);
        for (let [restName, objWorkSalar] of entries) {
            let entries = Object.entries(objWorkSalar);
            entries.sort((a, b) => b[1] - a[1]);
            let currAverage = 0;
            let curr = 0;
            let counter = 0;
            for (let [worker, salary] of entries) {
                curr += salary;
                counter++;
            }
            currAverage = curr / counter;
            if (currAverage > averageSalary) {
                averageSalary = currAverage;
                bestRestaurant = restName;
                bestSalary = entries[0][1];
            }
        }
        bestRestaurantElement.textContent = `Name: ${bestRestaurant} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
        let result = ``;
        let entriesResult = Object.entries(restaurantBook[bestRestaurant]);
        entriesResult.sort((a, b) => b[1] - a[1]);
        for (let [worker, salary] of entriesResult) {
            result += `Name: ${worker} With Salary: ${salary} `;
        }
        bestWorkersElement.textContent = result;
    }
}