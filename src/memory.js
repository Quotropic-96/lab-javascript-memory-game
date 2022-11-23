class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }
    let currentIdx = this.cards.length-1;
    while (currentIdx !== 0) {
      let randIdx = Math.floor(Math.random() * currentIdx);
      let extractCard = this.cards[currentIdx];
      this.cards[currentIdx] = this.cards[randIdx];
      this.cards[randIdx] = extractCard;
      currentIdx -= 1;
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
      return true;
    } else {
      return false;
    }
  }
}
