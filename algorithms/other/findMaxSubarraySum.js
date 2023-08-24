// I am given a 2d matrix of lockers, 
// i need to find the biggest value in a locker, 
// here are some input examples an their solutions

// input: [[5,6,7],[3,4,3]] 
// solution: 18 
// explanation: 5 + 6 + 7 = 18 
// the first subarray equals 18, and the second 10 
// so it returns the biggest one.

// input2: [[1,5],[7,3],[3,5]] 
// solution: 10 
// explanation: 7 + 3 = 10 
// the first subarray equals 6, the second subarray equals 10, the third subarray equals 8
// so it returns the biggest one.

function findMaxSubarraySum(matrix) {
    let maxSum = 0; // Variable to store the maximum sum found

    // Iterate through each subarray (row) in the matrix
    for (const row of matrix) {
        // Calculate the sum of elements in the current row
        const rowSum = row.reduce((sum, value) => sum + value, 0);

        // Update maxSum if the current row's sum is greater
        maxSum = Math.max(maxSum, rowSum);
    }

    return maxSum; // Return the maximum sum found   
}

// Test the function with example inputs
const input1 = [[5, 6, 7], [3, 4, 3]];
console.log(findMaxSubarraySum(input1)); // Output: 18

const input2 = [[1, 5], [7, 3], [3, 5]];
console.log(findMaxSubarraySum(input2)); // Output: 10



