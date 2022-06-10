function listNames(names) {
    let sorted = names.sort((a, b) => a.localeCompare(b));
    sorted.forEach((x, i) => console.log(`${i + 1}.${x}`));
}
listNames(["John", "Bob", "Christina", "Ema"]);