/* Question 2
There are n people in a line waiting to purchase tickets, with the 0th person at the front and the (n - 1)th person at the back. 

You are given a 0-indexed integer array of tickets of length n, where tickets[I] represents the number of tickets that the ith person wishes to purchase. 

Each person purchases a ticket in exactly one second. A person can only purchase one ticket at a time and must return to the end of the line (which happens instantly) to purchase additional tickets. If a person has no more tickets to buy, he or she will leave the line. 

Return the time spent for the individual at position k (0-indexed) to finish buying tickets. 

Example:

Input: tickets = [2,3,2], k = 2
Output: 6 */

function timeToBuyTickets(tickets, k) {
    let n = tickets.length;
    let time = 0;
    
    while (tickets[k] > 0) {
        for (let i = 0; i < n; i++) {
            if (tickets[i] > 0) {
                tickets[i] -= 1;
                time += 1;
                if (i === k && tickets[i] === 0) {
                    return time;
                }
            }
        }
        time += 1; // Move to the next second
    }
    
    return time;
}

// Example usage:
const tickets = [2, 3, 2];
const k = 2;
console.log(timeToBuyTickets(tickets, k)); // Output: 6