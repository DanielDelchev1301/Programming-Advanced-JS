function solve() {
    let resultElement = document.getElementById('output');
    let input = document.getElementById('input').value;
    let sentenses = input.split('.');
    sentenses = sentenses.filter(s => s !== '').map(x => x += '.');
    while (sentenses.length > 0) {
        let paragraph = document.createElement('p');
        let currSentenses = sentenses.splice(0, 3);
        paragraph.textContent = currSentenses.join('');
        resultElement.appendChild(paragraph);
    }
}