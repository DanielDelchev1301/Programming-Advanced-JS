class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if (name == '' || name == undefined || name == null) {
            throw new Error('Invalid input!');
        } else if (salary == '' || salary == undefined || salary == null) {
            throw new Error('Invalid input!');
        } else if (position == '' || position == undefined || position == null) {
            throw new Error('Invalid input!');
        } else if (department == '' || department == undefined || department == null) {
            throw new Error('Invalid input!');
        }
        if (salary < 0) {
            throw new Error('Invalid input!');
        }
        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = {};
        }
        this.departments[department][name] = [salary, position];
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment() {
        let arrOfDepartments = Object.entries(this.departments);
        let bestDepartment = undefined;
        let bestAverageSalary = 0;
        for (let department of arrOfDepartments) {
            let currentDepartment = department[0];
            let currObjWithWokers = department[1];
            let currAvrgSal = 0;
            let totalWorkersInDep = 0;
            let currSalary = 0;
            for (let worker in currObjWithWokers) {
                currSalary += currObjWithWokers[worker][0];
                totalWorkersInDep++;
            }
            currAvrgSal = currSalary / totalWorkersInDep;
            if (currAvrgSal > bestAverageSalary) {
                bestAverageSalary = currAvrgSal;
                bestDepartment = currentDepartment;
            }
        }
        let entries = Object.entries(this.departments[bestDepartment]);
        entries.sort((a, b) => b[1][0] - a[1][0]);
        entries.sort((a, b) => {
            let firstSalary = a[1][0];
            let secondSalary = b[1][0];
            if (firstSalary == secondSalary) {
                return a[0].localeCompare(b[0]);
            }
        });
        let result = `Best Department is: ${bestDepartment}\nAverage salary: ${bestAverageSalary.toFixed(2)}`;
        for (let [worker, [salary, position]] of entries) {
            result += `\n${worker} ${salary} ${position}`;
        }
        return result;
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());