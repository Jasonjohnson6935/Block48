/* Question 1
Determine the validity of an input string s, which consists solely of the characters (, ), {, }, [, and ]. You need to check the following conditions: 

  The opening brackets: 

- Must match with the corresponding closing brackets of the same type 

- Must be closed in the correct order 

- Should have a corresponding opening bracket of the same type 

Example: 

Input: s = "()" Output: true */

function isValid(s) {
    const stack = [];
    const mapping = { ")": "(", "}": "{", "]": "[" };

    for (let char of s) {
        if (mapping[char]) {
            const topElement = stack.pop() || '#';
            if (mapping[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

// Example usage:
const s = "()";
console.log(isValid(s)); // Output: true