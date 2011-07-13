function Card(value, suit) {
  this.cardValue = value;
  this.cardSuit = suit;
}

Card.prototype.getCardValue = function() {
  return this.cardValue;
};

Card.prototype.getCardSuit = function() {
  return this.cardSuit;
};

Card.prototype.toString = function() {
  var name = '';
  if (this.cardValue == 1) {
	  name = 'Ace of ' + this.cardSuit;
  } else if (this.cardValue == 11) {
	  name = 'Jack of ' + this.cardSuit;
  } else if (this.cardValue == 12) {
	  name = 'Queen of ' + this.cardSuit;
	} else if (this.cardValue == 13) {
	  name = 'King of ' + this.cardSuit;
	} else {
	  name = this.cardValue + ' of ' + this.cardSuit;
	}
  return name;
};