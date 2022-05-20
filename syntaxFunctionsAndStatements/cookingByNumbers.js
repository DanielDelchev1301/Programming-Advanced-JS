function cookingByNumbers(num, one, two, three, four, five) {
    let array = [one, two, three, four, five];
    num = Number(num);
    for (let curr of array) {
        if (curr == 'chop') {
            num /= 2;
            console.log(num);
        } else if (curr == 'dice') {
            num = Math.sqrt(num);
            console.log(num);
        } else if (curr == 'spice') {
            num++;
            console.log(num);
        } else if (curr == 'bake') {
            num *= 3;
            console.log(num);
        } else if (curr == 'fillet') {
            num *= 0.8;
            console.log(num);
        }
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');