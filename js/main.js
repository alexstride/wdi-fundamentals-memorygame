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

var flipCard = function () {
	var cardId = this.getAttribute("data-id");
	var currCard = cards[cardId];
	console.log("User flipped " + currCard.rank)
	console.log(currCard.suit);
	console.log(currCard.cardImage)
	cardsInPlay.push(currCard.rank);
	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

var createBoard = function() {
	for(var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById("game-board").appendChild(cardElement);

	}
}

createBoard();
