var deck     = new Stack(),
    p1Hand     = new Stack(),
    p2Hand     = new Stack(),
    p3Hand     = new Stack(),
    p4Hand     = new Stack(),
    discards = new Stack();

function shuffle() {

  if (deck == null) return;

  deck.shuffle(1);
  display();
}

function deal() {

  var i;

  if (deck == null) return;

  if (deck.cardCount() < 5)
    alert("Not enough cards.");
  else {
    discard();
    for (i = 0; i < 5; i++)
      p1Hand.addCard(deck.deal());
    for (i = 0; i < 5; i++)
      p2Hand.addCard(deck.deal());
  }

  display();
}

function discard() {

  if (deck == null) return;

  discards.combine(p1Hand);
  discards.combine(p2Hand);
  display();
}

function reset() {

  if (deck == null) return;

  discards.combine(p1Hand);
  discards.combine(p2Hand);
  deck.combine(discards);
  display();
}

function display() {
  var ulP1Hand = document.getElementById('p1Hand');
  var ulP2Hand = document.getElementById('p2Hand');
  var ulDiscards = document.getElementById('discards');

  function addCardsToHand(cards, elem, item) {
    while (elem.firstChild) {
      elem.removeChild(elem.firstChild);
    }

    for (var x=0;x<cards.cardCount();x++) {
      var newItem = document.createElement(item);
      newItem.innerText = cards.cards[x].rank;
      newItem.className = cards.cards[x].suit;
      elem.appendChild(newItem);
    }
  }

  addCardsToHand(p1Hand, ulP1Hand, 'li');
  addCardsToHand(p2Hand, ulP2Hand, 'li');
}


deck.makeDeck(1);
shuffle();
deal();