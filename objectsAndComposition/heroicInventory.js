function heroicInventory(input) {
    let result = [];
    for (let line of input) {
        let currHero = {};
        let [hero, level, items] = line.split(' / ');
        items = items ? items.split(', ') : [];
        currHero.name = hero;
        currHero.level = Number(level);
        currHero.items = items;
        result.push(currHero);
    }
    console.log(JSON.stringify(result));
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);