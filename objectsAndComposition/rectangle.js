function rectangle(width, height, color) {
    color = color.split('');
    for (let i = 0; i < 1; i++) {
        color[i] = color[i].toUpperCase();
    }
    color = color.join('');
    let rectangleObject = {
        width,
        height,
        color,
        calcArea() {
            return this.width * this.height;
        }
    }
    return rectangleObject;
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());