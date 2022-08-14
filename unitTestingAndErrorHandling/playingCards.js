function playingCards(face, suit) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = ['S', 'H', 'D', 'C'];
    if (!faces.includes(face) || !suits.includes(suit)) {
        throw new Error;
    }
    let card = {
        face,
        suit,
        toString() {
            console.log(`${this.face}${suitsUTF[this.suit]}`);
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
playingCards('2', 'D');