function Card(value, suit) {
  this.cardValue = value;
  this.cardSuit = suit;
	console.log('creating card obj');
}

Card.prototype.getCardValue = function() {
  return this.cardValue;
};

Card.prototype.getCardSuit = function() {
  return this.cardSuit;
};

Card.prototype.toString = function() {
  var name = '';
  if (this.value == 1) {
	  name = 'Ace of ' + this.suit;
  } else if (this.value == 11) {
	  name = 'Jack of ' + this.suit;
  } else if (this.value == 12) {
	  name = 'Queen of ' + this.suit;
	} else if (this.value == 13) {
	  name = 'King of ' + this.suit;
	} else {
	  name = this.value + ' of ' + this.suit;
	}
  return name;
};