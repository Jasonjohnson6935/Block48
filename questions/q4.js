/*Question 4
You are given a deck of integer arrays. There is a deck of cards with each card having a unique integer, and the integer on the ith card is deck[i].  

You can arrange the deck in any order; all cards in one deck are initially face-down (unrevealed).  

Repeat the following steps until all cards are revealed.  

Step 1: Take out the top card from the deck and reveal it. 

Step 2: If there are still cards in the deck, you should place the next top card at the bottom of the deck. 

Step 3: If any cards remain unseen, return to step 1. Otherwise, proceed to the end. 

Step 4: Return a deck order that reveals the cards in increasing order. 

Example:

Input: deck = [17,13,11,2,3,5,7]
Output: [2,13,3,11,5,17,7] */

function deckRevealedIncreasing(deck) {
    deck.sort((a, b) => a - b);
    const result = [];
    result.push(deck[deck.length - 1]);
    for (let i = deck.length - 2; i >= 0; i--) {
        result.unshift(result.pop());
        result.unshift(deck[i]);
    }
    return result;
}

// Example usage:
const deck = [17, 13, 11, 2, 3, 5, 7];
console.log(deckRevealedIncreasing(deck)); // Output: [2, 13, 3, 11, 5, 17, 7]
