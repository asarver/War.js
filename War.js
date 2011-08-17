function War() {
  this.gameDeck = new Deck();
  this.computerDeck = new Deck();
  this.myDeck = new Deck();
}

War.prototype.splitDeck = function() {
  for (var location = 0; location < this.gameDeck.getDeckLength(); location += 2) {
    this.myDeck.addToDeck(this.gameDeck.getCard(location));
    this.computerDeck.addToDeck(this.gameDeck.getCard(location + 1));
  }
};

War.prototype.playGame = function() {
  this.gameDeck.createCards();
  this.gameDeck.shuffleDeck();
  this.splitDeck();
  console.log('Computer Deck: ', 'length = ', this.computerDeck.getDeckLength());
  this.computerDeck.displayDeck();
  console.log('My Deck: ', 'length = ', this.myDeck.getDeckLength());
  this.myDeck.displayDeck();
  
  var cardOne = this.computerDeck.drawFromDeck();
  console.log(this.computerDeck.getIndexToDraw());
  var cardTwo = this.myDeck.drawFromDeck();
  console.log(this.myDeck.getIndexToDraw());
  console.log(cardOne.toString());
  console.log(cardTwo.toString());
  var value = cardOne.compareTo(cardTwo);
  console.log(value);
  
  if (value == -1) {
    // add cards to Comp Deck
    this.addCardsToWinningDeck(this.computerDeck, this.myDeck);
  } else if (value == 1) {
    // add cards to My Deck
    this.addCardsToWinningDeck(this.myDeck, this.computerDeck);
  } else if (value == 0) {
    console.log(this.war());
  }
  
  console.log('Computer Deck: ', 'length = ', this.computerDeck.getDeckLength());
  this.computerDeck.displayDeck();
  console.log('My Deck: ', 'length = ', this.myDeck.getDeckLength());
  this.myDeck.displayDeck();
};

War.prototype.war = function() {
  var cardsToDraw = 2;
  var myDeckHasEnough = this.myDeck.getIndexToDraw(); + cardsToDraw < this.myDeck.getDeckLength();
  var compDeckHasEnough = this.computerDeck.getIndexToDraw() + cardsToDraw < this.myDeck.getDeckLength();
  if (!myDeckHasEnough || !compDeckHasEnough) {
    if (!myDeckHasEnough && compDeckHasEnough || this.myDeck.getDeckLength() < this.computerDeck.getDeckLength()) {
      // computer wins
      return -14;
    } else if (myDeckHasEnough && !compDeckHasEnough || this.computerDeck.getDeckLength() < this.myDeck.getDeckLength()) {
      // player wins
      return 14;
    } else {
      var compCard = this.computerDeck.getCard(this.computerDeck.getDeckLength());
      var myCard = this.myDeck.getCard(this.myDeck.getDeckLength());
      var value = compCard.compareTo(myCard);
      if (value == -1) {
        // computer wins
        return -14;
      } else if (value == 1) {
        // player wins
        return 14;
      } else {
        return 'draw';
      }
    }
  } else {
    var myCardsDrawn = new Array(cardsToDraw);
    var compCardsDrawn = new Array(cardsToDraw);
    
    for (var index = 0; index < cardsToDraw; index++) {
      myCardsDrawn[index] = this.myDeck.drawFromDeck();
      compCardsDrawn[index] = this.computerDeck.drawFromDeck();
    }
    
    var value = compCardsDrawn[cardsToDraw - 1].compareTo(myCardsDrawn[cardsToDraw - 1]);
    if (value == 0) {
      console.log('will implement recursion here');
      value = this.war();
    } else if (value == -1) {
      for (var index = 0; index <= cardsToDraw; index++) {
        this.addCardsToWinningDeck(this.computerDeck, this.myDeck);
      }
    } else if (value == 1) {
      for (var index = 0; index <= cardsToDraw; index++) {
        this.addCardsToWinningDeck(this.myDeck, this.computerDeck);
      }
    }
    return value;
  }
};

War.prototype.addCardsToWinningDeck = function(winningDeck, losingDeck) {
  var cardRemoved = winningDeck.removeFromDeck();
  winningDeck.addToDeck(cardRemoved);
  cardRemoved = losingDeck.removeFromDeck();
  winningDeck.addToDeck(cardRemoved);
};

War.prototype.warCrap = function() {
  var cardsToDraw = 2;
  var myCardsDrawn = new Array(cardsToDraw);
  var compCardsDrawn = new Array(cardsToDraw);
  
  for (var index = 0; index < cardsToDraw; index++) {
    myCardsDrawn[index] = this.myDeck.drawFromDeck();
    compCardsDrawn[index] = this.computerDeck.drawFromDeck();
  }
  
  var isEqual = this.compareCards(myCardsDrawn[cardsToDraw - 1], compCardsDrawn[cardsToDraw - 1]);
  while (isEqual == 0) {
    isEqual = this.war();
  }
  
  if (isEqual == 1) {
    for (var index = 0; index < cardsToDraw; index++) {
      var cardRemoved = this.computerDeck.removeFromDeck();
      this.computerDeck.addToDeck(cardRemoved);
      cardRemoved = this.myDeck.removeFromDeck();
      this.computerDeck.addToDeck(cardRemoved);
    }
    return 1;
  } else {
    for (var index = 0; index < cardsToDraw; index++) {
      var cardRemoved = this.myDeck.removeFromDeck();
      this.myDeck.addToDeck(cardRemoved);
      cardRemoved = this.computerDeck.removeFromDeck();
      this.myDeck.addToDeck(cardRemoved);
    }
    return -1;
  }
};

var newGame = new War();
newGame.playGame();
