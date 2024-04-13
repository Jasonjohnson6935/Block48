/* Question 3
You are given an array heights representing the heights of students in a class. The students are standing in a line, and their heights are listed in the order they appear from left to right. The school wants to arrange the students in a non-decreasing order by their heights. However, when they rearrange the students, a few may end up in different positions from their original positions.

You need to write a function heightChecker(heights) that determines the minimum number of students who are not standing in the correct positions after the rearrangement. Implement the function heightChecker and return the minimum number of students who are not positioned correctly.

Example: 

Input: heights = [1,1,4,2,1,3]
Output: 3 */

function heightChecker(heights) {
    const sortedHeights = [...heights].sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedHeights[i]) {
            count++;
        }
    }
    return count;
}

// Example usage:
const heights = [1, 1, 4, 2, 1, 3];
console.log(heightChecker(heights)); // Output: 3