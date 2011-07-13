function WarCardGame() {
  this.gameDeck = new Deck();
  this.gameDeck.createDeck();
  this.computerDeck = new Deck();
  this.myDeck = new Deck();
}

WarCardGame.prototype.splitDeck = function() {
  console.log("This is deck length: " + this.gameDeck.length);
  for (var location = 0; location < this.gameDeck.length; location += 2) {
	  console.log(this.gameDeck[location]);
    this.myDeck.push(this.gameDeck[location]);
		console.log(this.myDeck[0]);
    this.computerDeck.push(this.gameDeck[location + 1]);
		console.log(this.computerDeck[0]);
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
newGame.gameDeck.displayDeck();
