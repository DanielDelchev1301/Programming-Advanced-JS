function wordsUppercase(string) {
    let pattern = /[A-Za-z]+/g;
    let match = pattern.exec(string);
    let words = [];
    while (match !== null) {
        words.push(match[0].toLocaleUpperCase());
        match = pattern.exec(string);
    }
    console.log(words.join(', '));
}
wordsUppercase('hello');