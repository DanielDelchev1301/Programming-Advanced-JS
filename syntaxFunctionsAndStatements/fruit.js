function fruit(type, weight, price) {
    let kilograms = weight / 1000;
    console.log(`I need $${(price * kilograms).toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${type}.`);
}
fruit('orange', 2500, 1.80);