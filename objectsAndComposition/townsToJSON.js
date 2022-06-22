function townsToJSON(input) {
    let _ = input.shift();
    let result = [];
    for (let line of input) {
        let object = {};
        let [town, latitude, longitude] = line.split(' | ');
        town = town.split('| ')[1];
        longitude = longitude.split(' |')[0];
        object.Town = town;
        object.Latitude = Number(parseFloat(latitude).toFixed(2));
        object.Longitude = Number(parseFloat(longitude).toFixed(2));
        result.push(object);
    }
    let parse = JSON.stringify(result);
    console.log(parse);
}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);