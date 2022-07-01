function colorize() {
    let colorizedElements = document.querySelectorAll('tr:nth-of-type(2n) td');
    let colorizedElementsArr = Array.from(colorizedElements);
    colorizedElementsArr.forEach(x => {
        x.style.backgroundColor = 'teal';
    });
}