Create a single player black jack games that plays against the house, i.e. a human player and computer dealer.
The game should be played with a standard deck of playing cards (52).
The house should be dealt two cards, hidden from the player until the house reveals its hand.
The player should be dealt a hand that contains two cards, visible to the player.
The player should have a chance to hit (i.e. be dealt another card) until they decide to stop or they bust (i.e. their total is over 21 ).
When the player stands, the house will reveal its hand and hit (i.e. draw cards) until they have 17 or more.
If either the house or the player bust, they lose.

## Nouns

- game / blackjack
- player / human
- dealer / computer / house
- deck
- 52 cards made up of 4 suit of 13 cards
- card
  - suit
  - values

## Verb

deal
hit / stay
create
plays
bust / win / lose / draw

## Other important stuff

52 cards
4 suit / 13 cards
Aces are 11
busting = over 21
dealer stands at 17 or more


## Algorithm

get a deck of cards
shuffle the cards
deals two cards to the house first - one face up, one face down
deal two cards to player - face up
player decides to hit or stay
if they hit,
    the next random card in the deck will be added to player hand
    did player total bust?
        if so, game over
        otherwise, they could hit or stay
if they stay
    dealer reveals hidden card
        if the value of their hand is less than 17, they keep hitting
        if the value of their hand is more than 21, they bust/lose
        otherwise, if it is more than they player they win
deck of cards to be an array
    each element of the array is a card
        card = object
            attributes of object = suit, value
