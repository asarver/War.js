function Deck() {
  this.myDeck = [];
  this.indexToDraw = 0;
}

Deck.prototype.createCards = function() {
  for (var suit = 1; suit <= 4; suit++) {
    for (var value = 1; value <= 13; value++) {
      if (suit == 1) {
        this.myDeck.push(new Card(value, "Hearts"));
      } else if (suit == 2) {
        this.myDeck.push(new Card(value, "Clubs"));
      } else if (suit == 3) {
        this.myDeck.push(new Card(value, "Diamonds"));
      } else {
        this.myDeck.push(new Card(value, "Spades"));
      }
    }
  }
};

Deck.prototype.shuffleDeck = function() {
  for (var index = 0; index < this.myDeck.length; index++) {
    var randomIndex = Math.floor(Math.random() * this.myDeck.length);
    var tempCard = this.myDeck[randomIndex];
    this.myDeck[randomIndex] = this.myDeck[index];
    this.myDeck[index] = tempCard;
  }
};

Deck.prototype.displayDeck = function() {
  for (var index = 0; index < this.myDeck.length; index++) {
    console.log(index);
    console.log(' ' + this.myDeck[index].toString() + ', ');  
  }
};

Deck.prototype.drawFromDeck = function() {
  if (this.indexToDraw >= this.myDeck.length) {
    this.shuffleDeck();
    this.indexToDraw = 0;
  }
  var cardDrawn = this.myDeck[this.indexToDraw];
	this.indexToDraw++;
	return cardDrawn;
};

Deck.prototype.removeFromDeck = function() {
  var cardRemoved = this.myDeck.shift();
  if (this.indexToDraw != 0) {
    this.indexToDraw -= 1;
  }
  return cardRemoved;
}

Deck.prototype.addToDeck = function(card) {
  this.myDeck.push(card);
}

Deck.prototype.getDeckLength = function() {
  return this.myDeck.length;
}

Deck.prototype.getCard = function(indexNumber) {
  return this.myDeck[indexNumber];
}
