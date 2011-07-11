function Deck() {
  this.myDeck = [];
	this.indexToDraw = 0;
}

Deck.prototype.createDeck = function() {
  var deckIndex = 0;
  console.log(this.myDeck.length);
  for (var suit = 1; suit <= 4; suit++) {
	  console.log('actually creating the cards');
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
  console.log(this.myDeck.length);
	for(var i = 0; i < this.myDeck.length; i++) {
	  this.myDeck[i].toString();
		console.log('hello.');
	}
};

Deck.prototype.shuffleMyDeck = function() {
  for (var index = 0; index < this.myDeck.length; index++) {
	  var randomIndex = Math.floor(Math.random()*this.myDeck.length);
		var tempCard = this.myDeck[randomIndex];
		this.myDeck[randomIndex] = this.myDeck[index];
		this.myDeck[index] = tempCard;
	} 
};

Deck.prototype.displayDeck = function() {
  console.log('in display function');
	console.log(this.myDeck.length);
  for (var index = 0; index < this.myDeck.length; index++) {
    console.log('printing something');
    console.log(this.myDeck[index].toString() + ', ');  
  }
};

Deck.prototype.drawFromDeck = function() {
  if (indexToDraw >= this.myDeck.length) {
	  this.myDeck.shuffleMyDeck();
		this.indexToDraw = 0;
	}
	return this.myDeck[this.indexToDraw];
	++this.indexToDraw;
};
