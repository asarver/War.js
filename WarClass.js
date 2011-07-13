function WarCardGame() {
  this.gameDeck = new Deck();
  this.gameDeck.createCards();
  this.computerDeck = new Deck();
  this.myDeck = new Deck();
}

WarCardGame.prototype.splitDeck = function() {
  console.log("This is deck length: " + this.gameDeck.getDeckLength());
  for (var location = 0; location < this.gameDeck.getDeckLength(); location += 2) {
    this.myDeck.addToDeck(this.gameDeck.getCard(location));
    this.computerDeck.addToDeck(this.gameDeck.getCard(location + 1));
  }
};

WarCardGame.prototype.compareCards = function() {
  var myCard = this.myDeck.drawFromDeck();
  var compCard = this.computerDeck.drawFromDeck();
  var myCardValue = myCard.getCardValue();
  var compCardValue = compCard.getCardValue();
  if (myCardValue == compCardValue) {
    this.war();
  } else if (myCardValue < compCardValue) {
    if (myCardValue == 1) {
      // add the card from comp deck to my deck
    }
  }
};

WarCardGame.prototype.war = function() {
};

var newGame = new WarCardGame();
newGame.gameDeck.shuffleDeck();
newGame.splitDeck();
newGame.computerDeck.displayDeck();
