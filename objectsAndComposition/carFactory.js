function carFactory(car) {
    if (car.power >= 90 && car.power < 105) {
        car.engine = {
            power: 90,
            volume: 1800
        };
    } else if (car.power >= 105 && car.power < 160) {
        car.engine = {
            power: 120,
            volume: 2400
        };
    } else if (car.power >= 160) {
        car.engine = {
            power: 200,
            volume: 3500
        };
    }
    delete car.power;
    let type = car.carriage;
    delete car.carriage;
    car.carriage = {
        type: type,
        color: car.color
    };
    delete car.color;
    let num = Math.floor(car.wheelsize);
    if (num % 2 == 0) {
        num--;
    }
    car.wheels = [num, num, num, num];
    delete car.wheelsize;
    return car;
}
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});