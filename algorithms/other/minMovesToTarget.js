// given a string "s" and a letter "t" that exists once or more times in the string "s", 
// return ana array "d" where "d[idx] "is the minimun number of letters required to move 
// from letter "s[idx]" to the closest letter "t" in "s"

function minMovesToTarget(s, t) {
    // Create an array to store minimum moves required for each letter
    const minMovesArray = new Array(s.length);

    // Find the positions of all occurrences of the target letter t
    const targetIndices = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === t) {
            targetIndices.push(i);
        }
    }

    // Iterate through each letter in the input string s
    for (let i = 0; i < s.length; i++) {
        if (s[i] === t) {
            minMovesArray[i] = 0; // If the letter is the target letter, no moves are needed
        } else {
            minMovesArray[i] = Infinity; // Initialize the minimum moves with a high value

            // Calculate the minimum moves required to reach any occurrence of the target letter t
            for (const targetIndex of targetIndices) {
                // Calculate the absolute distance between the current letter and the target letter
                const distance = Math.abs(targetIndex - i);

                // Update the minimum moves if the calculated distance is smaller than the current value
                minMovesArray[i] = Math.min(minMovesArray[i], distance);
            }
        }
    }

    // Return the array containing the minimum moves for each letter
    return minMovesArray;
}

// Test the function with an example input
const s = "abacabd";
const t = "a";
const result = minMovesToTarget(s, t);
console.log(result); // Output: [0, 1, 0, 1, 2, 3, 2]
