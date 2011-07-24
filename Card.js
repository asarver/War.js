function Card(value, suit) {
  this.cardValue = value;
  this.cardSuit = suit;
}

Card.JACK = 11;
Card.QUEEN = 12;
Card.KING = 13;
Card.ACE = 1;

Card.prototype.getCardValue = function() {
  return this.cardValue;
};

Card.prototype.getCardSuit = function() {
  return this.cardSuit;
};

Card.prototype.toString = function() {
  switch (this.cardValue) {
    case this.JACK:
      return 'Jack of ' + this.cardSuit;
    case this.QUEEN:
      return 'Queen of ' + this.cardSuit;
    case this.KING:
      return 'King of ' + this.cardSuit;
    case this.ACE:
      return 'Ace of ' + this.cardSuit;
    default:
      return this.cardValue + ' of ' + this.cardSuit;
  }
};

Card.prototype.compareTo = function(cardToCompare) {
  if (this.cardValue == cardToCompare.cardValue) {
    return 0;  
  } else if (cardToCompare.cardValue > this.cardValue && this.cardValue != 1 || cardToCompare.cardValue == 1) {
    return 1;
  } else {
    return -1;
  }
};
