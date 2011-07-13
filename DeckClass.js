function Deck() {
  this.myDeck = [];
	this.indexToDraw = 0;
}

Deck.prototype.createDeck = function() {
  var deckIndex = 0;
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
			deckIndex++;
    }
  }
};

Deck.prototype.shuffleDeck = function() {
  for (var index = 0; index < this.myDeck.length; index++) {
	  var randomIndex = Math.floor(Math.random()*this.myDeck.length);
		var tempCard = this.myDeck[randomIndex];
		this.myDeck[randomIndex] = this.myDeck[index];
		this.myDeck[index] = tempCard;
	} 
};

Deck.prototype.displayDeck = function() {
  for (var index = 0; index < this.myDeck.length; index++) {
    console.log(index + ' ' + this.myDeck[index].toString() + ', ');  
  }
};

Deck.prototype.drawFromDeck = function() {
  if (indexToDraw >= this.myDeck.length) {
	  this.myDeck.shuffleMyDeck();
		this.indexToDraw = 0;
	}
	return this.myDeck[this.indexToDraw];
	this.indexToDraw++;
};

Deck.prototype.removeFromDeck = function() {
  
}

Deck.prototype.addToDeck = function(card) {
  
}
