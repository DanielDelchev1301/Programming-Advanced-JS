function solution(input) {
    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    return function (input) {
        if (input !== 'report') {
            if (input.includes('restock')) {
                let [_, microelement, quantity] = input.split(' ');
                stock[microelement] += Number(quantity);
            } else {
                let [_, recipe, quantity] = input.split(' ');
                let ingredientsObject = recipes[recipe];
                for (let key in ingredientsObject) {
                    let quant = ingredientsObject[key] * Number(quantity);
                    
                }
            }
        } else {
            let result = '';
            Object.keys(stock)
                .forEach(key => {
                    result += `${key}=${stock[key]} `;
                });
            return result;
        }
    }
}

let manager = solution();
console.log(manager("prepare eggs 50")); // Success 
console.log(manager("report")); // Error: not enough carbohydrate in stock 