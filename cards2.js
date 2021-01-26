
var makeDeck = function () {

var deck = [];

var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']

var suitIndex = 0;
while ( suitIndex < suits.length){


var currentSuit = suits[suitIndex];
console.log('current suit : ' + currentSuit)

var rankCounter = 1;
while (rankCounter <= 13) {
    var cardName = rankCounter;


if (cardName == 1){
    cardName = 'ace';
} else if (cardName == 11){
    cardName = 'jack';
} else if (cardName == 12){
    cardName = 'queen';
} else if (cardName == 13){
    cardName = 'king';
}

var card = {
    name: cardName,
    suit: currentSuit,
    rank: rankCounter
};


deck.push(card);

 rankCounter = rankCounter + 1;
  }
 suitIndex = suitIndex + 1;
}

return deck;

};

var getRandomIndex = function (size){
    return Math.floor(Math.random() * size)
};

var shuffleCards = function (cards) {
    var index = 0;

    while (index < cards.length) {
        var randomIndex = getRandomIndex(cards.length);

        var currentItem = cards[index];

        var randomItem = cards[randomIndex];

        cards[index] = randomItem;
        cards[randomIndex] = currentItem;

        index = index + 1;
    }

return cards;
};

//Initialize variables
// deck is shuffled and split between players
var deck = shuffleCards(makeDeck());
var playerHand = deck.splice(0,26);
var computerHand = deck;

var playerScore = 0;
var computerScore = 0;
var round = 1;

// hub of the process. 
var main = function(){
    console.log(`***** round: ${round} ***** `)
    var playerCard = playerHand.pop();
    var computerCard = computerHand.pop();
    var myOutputValue = 'WAR <br>';
    console.log( "Card of Player:   " + playerCard.name + " " + playerCard.suit);
    console.log( "Card of Computer: " + computerCard.name + " " + computerCard.suit);
    if(playerCard.rank > computerCard.rank) {
         console.log ("player wins round")
        playerScore++
    }else if (playerCard.rank < computerCard.rank){
        console.log("computer wins round")
        computerScore++
    } else {
        console.log("tie");

        // temperal literals logiing player score from condition above.
   }
   console.log(`Player Score: ${playerScore}`)
   console.log(`Computer Score: ${computerScore}`)

};
  

while( round < 27){
    main();
    round++

}
//conditional statement to log out who wins game
var endGameMessage = ""
if (playerScore > computerScore){
    endGameMessage = " Player Win Game!! "
} else if (computerScore > playerScore){
    endGameMessage = " Computer Wins Game!! "
} else {
    endGameMessage = "Tie !!"
}
console.log(endGameMessage)































