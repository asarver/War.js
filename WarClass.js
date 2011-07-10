function WarCardGame() {
  this.gameDeck = new Deck();
	this.gameDeck.createDeck();
	this.computerDeck = new Deck();
	this.myDeck = new Deck();
}

//WarCardGame.inherits(Deck);

WarCardGame.prototype.displayDeck = function() {
  this.gameDeck.displayDeck();
	console.log('supposed to be trying to display the deck');
};

WarCardGame.prototype.splitDeck = function() {
};

WarCardGame.prototype.compareCards = function() {
};

WarCardGame.prototype.war = function() {
};

WarCardGame.prototype.removeFromDeck = function() {
};

WarCardGame.prototype.addToDeck = function() {
};

var newGame = new WarCardGame();
newGame.displayDeck();

