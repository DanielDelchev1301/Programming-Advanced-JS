function printDeckOfCards(cards) {
    let result = [];
    function createCard(face, suit) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = ['S', 'H', 'D', 'C'];
        if (!faces.includes(face) || !suits.includes(suit)) {
            return `Invalid card: ${face}${suit}`;
        }
        let card = {
            face,
            suit,
            toString() {
                return `${this.face}${suitsUTF[this.suit]}`;
            }
        }
        let suitsUTF = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        }
        return card.toString();
    }
    let face = '';
    let suit = '';
    cards.forEach(x => {
        if (x.includes('0')) {
            let peaces = x.split('');
            suit = peaces.pop();
            face = peaces.join('');
        } else {
            [face, suit] = x.split('');
        }
        result.push(createCard(face, suit));
    });
    let flag = false;
    let invalid = '';
    result.forEach(x => {
        if (x.includes('Invalid')) {
            flag = true;
            invalid = x;
        }
    });
    if (flag) {
        console.log(invalid);
    } else {
        console.log(result.join(' '));
    }
}
printDeckOfCards(['5S', '3D', 'QD', '2C']);