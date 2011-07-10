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
	  name = 'Ace of ' + suit;
  } else if (this.value == 11) {
	  name = 'Jack of ' + suit;
  } else if (this.value == 12) {
	  name = 'Queen of ' + suit;
	} else if (this.value == 12) {
	  name = 'King of ' + suit;
	} else {
	  name = value + ' of ' + suit;
	}
  return name;
};