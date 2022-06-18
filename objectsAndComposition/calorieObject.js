function calorieObject(input) {
    let calorieBook = {};
    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            calorieBook[input[i]] = Number(input[i + 1]);
        }
    }
    console.log(calorieBook);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);