function WarCardGame() {
  this.gameDeck = new Deck();
  this.gameDeck.createCards();
  this.computerDeck = new Deck();
  this.myDeck = new Deck();
}

WarCardGame.prototype.splitDeck = function() {
  for (var location = 0; location < this.gameDeck.getDeckLength(); location += 2) {
    this.myDeck.addToDeck(this.gameDeck.getCard(location));
    this.computerDeck.addToDeck(this.gameDeck.getCard(location + 1));
  }
};

WarCardGame.prototype.playGame = function() {
  //this.gameDeck.shuffleDeck();
  this.splitDeck();
  
  console.log('computer deck');
  newGame.computerDeck.displayDeck();
  console.log('my deck');
  newGame.myDeck.displayDeck();

  // need input controller
  while (this.myDeck.getDeckLength() > 0 && this.computerDeck.getDeckLength() > 0) {
    var cardOneMyDeck = this.myDeck.drawFromDeck();
    var cardOneCompDeck = this.computerDeck.drawFromDeck();
    var isEqual = this.compareCards(cardOneMyDeck, cardOneCompDeck);
    if (isEqual == 0) {
      console.log('they\'re equal');
      isEqual = this.war();
    }
    if (isEqual == 1) {
      var cardRemoved = this.computerDeck.removeFromDeck();
      this.computerDeck.addToDeck(cardRemoved);
      cardRemoved = this.myDeck.removeFromDeck();
      this.computerDeck.addToDeck(cardRemoved);
    } else {
      var cardRemoved = this.myDeck.removeFromDeck();
      this.myDeck.addToDeck(cardRemoved);
      cardRemoved = this.computerDeck.removeFromDeck();
      this.myDeck.addToDeck(cardRemoved);
    }
    
    console.log('computer deck');
    newGame.computerDeck.displayDeck();
    console.log('computer deck length', newGame.computerDeck.getDeckLength());
    console.log('my deck');
    newGame.myDeck.displayDeck();
    console.log('my deck length', newGame.myDeck.getDeckLength());
  }
  
  if (this.myDeck.getDeckLength() == 0) {
    console.log('Computer wins.');
  } else {
    console.log('You win.');
  }
};

WarCardGame.prototype.compareCards = function(myCard, compCard) {
  var myValue = myCard.getCardValue();
  var compValue = compCard.getCardValue();
  if (myValue == compValue) {
    return 0;  
  } else if (compValue > myValue && myValue != 1 || compValue == 1) {
    return 1;
  } else {
    return -1;
  }
};

WarCardGame.prototype.war = function(numToDraw) {
  var cardsToDraw = numToDraw || 2;
  var cardsRequired = this.findNumberCardsRequired(cardsToDraw);
  
  var compLength = this.computerDeck.getDeckLength();
  var myLength = this.myDeck.getDeckLength();
  
  if (compLength < cardsRequired - 1 ^ myLength < cardsRequired - 1) {
    if (compLength < cardsRequired) {
      return -2;
    } else {
      return 2;
    }
  } else if (compLength < cardsRequired - 1 && myLength < cardsRequired - 1) {
    if (compLength == myLength) {
      return 14;
    } else if (compLength < myLength) {
      return -2;
    } else {
      return 2;
    }
  } else {  
    var myCardsDrawn = new Array(cardsToDraw);
    var compCardsDrawn = new Array(cardsToDraw);

    for (var index = 0; index < cardsToDraw; index++) {
      myCardsDrawn[index] = this.myDeck.drawFromDeck();
      compCardsDrawn[index] = this.computerDeck.drawFromDeck();
    }

    var isEqual = this.compareCards(myCardsDrawn[cardsToDraw - 1], compCardsDrawn[cardsToDraw - 1]);
    while (isEqual == 0) {
      isEqual = this.war(cardsToDraw++);
    }

    if (isEqual == 1) {
      for (var index = 0; index < cardsToDraw; index++) {
        var cardRemoved = this.computerDeck.removeFromDeck();
        this.computerDeck.addToDeck(cardRemoved);
        cardRemoved = this.myDeck.removeFromDeck();
        this.computerDeck.addToDeck(cardRemoved);
      }
      return 1;
    } else if (isEqual == -1) {
      for (var index = 0; index < cardsToDraw; index++) {
        var cardRemoved = this.myDeck.removeFromDeck();
        this.myDeck.addToDeck(cardRemoved);
        cardRemoved = this.computerDeck.removeFromDeck();
        this.myDeck.addToDeck(cardRemoved);
      }
      return -1;
    } else {
      return isEqual;
    }
  }
};

WarCardGame.prototype.findNumberCardsRequired = function(numberDrawn) {
  if (numberDrawn <= 1) {
    return 1;
  } else {
    return numberDrawn + this.findNumberCardsRequired(numberDrawn - 1);
  }
};

var newGame = new WarCardGame();

newGame.playGame();
//var cardOne = newGame.myDeck.drawFromDeck();
//var cardTwo = newGame.computerDeck.drawFromDeck();
//var isEqual = newGame.compareCards(cardOne, cardTwo);
//console.log(isEqual);
//if (isEqual == 1) {
//  var cardRemoved = newGame.computerDeck.removeFromDeck();
//  newGame.computerDeck.addToDeck(cardRemoved);
//  cardRemoved = newGame.myDeck.removeFromDeck();
//  newGame.computerDeck.addToDeck(cardRemoved);
//} else {
//  var cardRemoved = newGame.myDeck.removeFromDeck();
//  newGame.myDeck.addToDeck(cardRemoved);
//  cardRemoved = newGame.computerDeck.removeFromDeck();
//  newGame.myDeck.addToDeck(cardRemoved);
//}


