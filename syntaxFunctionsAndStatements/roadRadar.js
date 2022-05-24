function roadRadar(speed, zone) {
    let limit = 0;
    if (zone == 'motorway') {
        limit = 130;
    } else if (zone == 'interstate') {
        limit = 90;
    } else if (zone == 'city') {
        limit = 50;
    } else if (zone == 'residential') {
        limit = 20;
    }

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else if (speed <= limit + 20) {
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - speeding`);
    } else if (speed <= limit + 40) {
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - excessive speeding`);
    } else {
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - reckless driving`);
    }
}
roadRadar(21, 'residential');