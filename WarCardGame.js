var gameDeck = new Array();
var compDeckIndex = 0;
var myDeckIndex = 0;
var compDeck = new Array();
var myDeck = new Array();

function War() {
  // vars used for game
  //gameDeck = new Array(52);
  //this.compDeck = 0;
  //this.gameDeck = 0;
}

War.prototype = new War();
  
// functions used to create deck and play game
War.prototype.createDeck = function() {
  var index = 0;
  for(var x = 1; x <= 13; ++x) {
    if (x == 1) {
      for (var y = 0; y < 4; ++y) {
        gameDeck[index] = 'Ace of ' + y;
        ++index;
        //document.write('In the Aces');
      }
    } else if (x == 11) {
      for (var y = 0; y < 4; ++y) {
        gameDeck[index] = 'Jack of ' + y;
        ++index;
        //document.write('In the Jacks');
      }
    } else if (x == 12) {
      for (var y = 0; y < 4; ++y) {
        gameDeck[index] = 'Queen of ' + y;
        ++index;
        //document.write('In the Queens');
      }
    } else if (x == 13) {
      for (var y = 0; y < 4; ++y) {
        gameDeck[index] = 'King of ' + y;
        ++index;
        //document.write('In the Kings');
      }
    } else {
      for (var y = 0; y < 4; ++y) {
        gameDeck[index] = x + '\'s of ' + y;
        ++index;
        //document.write('In the regular numbers');
      }
    }
  }
}
  
War.prototype.shuffleDeck = function() {
  // TODO: there has to be a more efficient way of doing this??
  for (var i = 0; i < gameDeck.length; ++i) {
    var randomNum = Math.floor(Math.random()*52);
    var temp = gameDeck[randomNum];
    gameDeck[randomNum] = gameDeck[i];
    gameDeck[i] = temp;
  }
}
  
War.prototype.splitDeck = function() {
  // TODO: splits deck between compDeck and gameDeck
  var j = 0;
  for (var i = 0; i < gameDeck.length; i += 2) {
    myDeck[j] = gameDeck[i];
    compDeck[j] = gameDeck[i+1];
    ++j;
  }
}
  
War.prototype.drawCards = function() {
  if (myDeckIndex >= myDeck.length) {
    myDeckIndex = 0;
    //shuffle myDeck?
  } 
  if (compDeckIndex >= compDeck.length) {
    compDeckIndex = 0;
    // shuffle compDeck?
  }
  // TODO: draws a card from compDeck and gameDeck
  document.write(myDeck[myDeckIndex] + ' vs. ' + compDeck[compDeckIndex]);
  ++myDeckIndex;
  ++compDeckIndex;
}
  
War.prototype.compareCards = function() {
  // TODO: compares the cards drawn
}
  
War.prototype.war = function() {
  // TODO: if cards are equal, another two cards are drawn
}
  
War.prototype.addCardsToDeck = function() {
  // TODO: adds cards to winner's deck
}
  
War.prototype.display = function() {
  // TODO: displays the cards to html
  for (var i = 0; i < gameDeck.length; ++i) {
    document.write(gameDeck[i] + '<br />');
  }
}

War.prototype.displayBothDecks = function() {
  document.write('<p />My deck.<br />');
  for (var i = 0; i < myDeck.length; ++i) {
    document.write(myDeck[i] + '<br />');
  }
  document.write('<p />Comp deck.<br />');
  for (var i = 0; i < compDeck.length; ++i) {
    document.write(compDeck[i] + '<br />');
  }
}


var myObject = new War();

myObject.createDeck();
myObject.shuffleDeck();
myObject.splitDeck();
myObject.drawCards();
myObject.drawCards();


