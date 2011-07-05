function War() {
  
  // vars used for game
  this.deck = new Array(52);
  this.compDeck = 0;
  this.myDeck = 0;
  
  // functions used to create deck and play game
  this.prototype.createDeck = function() {
    // TODO: create a Deck of 52 cards
    var aDeck = new Array(52);
    var index = 0;
    for(var x = 1; x <= 13; ++x) {
      if (x == 1) {
        for (var y = 0; y < 4; ++y) {
          aDeck[index] = 'Ace of ' + char(y);
          ++index;
        }
      } else if (x == 11) {
        for (var y = 0; y < 4; ++y) {
          aDeck[index] = 'Jack of ' + char(y);
          ++index;
        }
      } else if (x == 12) {
        for (var y = 0; y < 4; ++y) {
          aDeck[index] = 'Queen of ' + char(y);
          ++index;
        }
      } else if (x == 13) {
        for (var y = 0; y < 4; ++y) {
          aDeck[index] = 'King of ' + char(y);
          ++index;
        }
      } else {
        for (var y = 0; y < 4; ++y) {
          aDeck[index] = x + '\'s of ' + char(y);
          ++index;
        }
      }
    }
    return aDeck;
  }
  
  this.prototype.shuffleDeck = function() {
    // TODO: shuffles deck
  }
  
  this.prototype.splitDeck = function() {
    // TODO: splits deck between compDeck and myDeck
  }
  
  this.prototype.drawCards = function() {
    // TODO: draws a card from compDeck and myDeck
  }
  
  this.prototype.compareCards = function() {
    // TODO: compares the cards drawn
  }
  
  this.prototype.war = function() {
    // TODO: if cards are equal, another two cards are drawn
  }
  
  this.prototype.addCardsToDeck = function() {
    // TODO: adds cards to winner's deck
  }
  
  this.prototype.display = function() {
    // TODO: displays the cards on the table
    // idk if I need this yet
    for (var i = 0; i < this.deck; ++i) {
      console.log(this.deck[i]);
    }
  }
}

var myObject = War();
myObject.deck = createDeck();
myObject.display();
