 console.log("Up and running!");

var createCard = function(cardRank, cardSuit) {
	return {
		rank: cardRank,
		suit: cardSuit,
		cardImage : cardRank === "queen"? 
			cardSuit === "hearts"? "images/queen-of-hearts.png" : "images/queen-of-diamonds.png" : 
			cardSuit === "hearts"? "images/king-of-hearts.png" : "images/king-of-diamonds.png"
	}
}

cards = [createCard("queen", "hearts"), createCard("queen", "diamonds"), createCard("king", "hearts"), createCard("king", "diamonds")];

//console.log(cards);

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

var flipCard = function (cardId) {
	var currCard = cards[cardId];
	console.log("User flipped " + currCard.rank)
	console.log(currCard.suit);
	console.log(currCard.cardImage)
	cardsInPlay.push(currCard.rank);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

flipCard(0);
flipCard(2);
