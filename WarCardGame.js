var myDeck = new Array();

function War() {
  // vars used for game
  //myDeck = new Array(52);
  //this.compDeck = 0;
  //this.myDeck = 0;
}

War.prototype = new War();
  
// functions used to create deck and play game
War.prototype.createDeck = function() {
  var index = 0;
  for(var x = 1; x <= 13; ++x) {
    if (x == 1) {
      for (var y = 0; y < 4; ++y) {
        myDeck[index] = 'Ace of ' + y;
        ++index;
        //console.log('In the Aces');
      }
    } else if (x == 11) {
      for (var y = 0; y < 4; ++y) {
        myDeck[index] = 'Jack of ' + y;
        ++index;
        //console.log('In the Jacks');
      }
    } else if (x == 12) {
      for (var y = 0; y < 4; ++y) {
        myDeck[index] = 'Queen of ' + y;
        ++index;
        //console.log('In the Queens');
      }
    } else if (x == 13) {
      for (var y = 0; y < 4; ++y) {
        myDeck[index] = 'King of ' + y;
        ++index;
        //console.log('In the Kings');
      }
    } else {
      for (var y = 0; y < 4; ++y) {
        myDeck[index] = x + '\'s of ' + y;
        ++index;
        //console.log('In the regular numbers');
      }
    }
  }
}
  
War.prototype.shuffleDeck = function() {
  // TODO: there has to be a more efficient way of doing this??
  for (var i = 0; i < myDeck.length; ++i) {
    var randomNum = Math.floor(Math.random()*52);
    var temp = myDeck[randomNum];
    myDeck[randomNum] = myDeck[i];
    myDeck[i] = temp;
  }
}
  
War.prototype.splitDeck = function() {
  // TODO: splits deck between compDeck and myDeck
}
  
War.prototype.drawCards = function() {
  // TODO: draws a card from compDeck and myDeck
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
  // only displays to console
  // TODO: displays the cards to html
  console.log('I am in display function');
  for (var i = 0; i < myDeck.length; ++i) {
    console.log(myDeck[i]);
  }
}


var myObject = new War();
myObject.createDeck();
myObject.display();
myObject.shuffleDeck();
myObject.display();
