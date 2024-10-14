// Binary Search Algorithm:

// How it works:

// Binary Search is an algorithm used to find an element in a sorted array.
// It works by repeatedly dividing the search interval in half.
// If the element to be found is less than the middle element,
// the search continues on the left half, otherwise,
// it continues on the right half.
// This process is repeated until the element is found or the interval is empty.

// Complexity:
// Time complexity: O(log n), where n is the number of elements in the array.
// Space complexity: O(1) for the iterative version
// and O(log n) for the recursive version.
// ------------------------------------------------------------------------------

function binarySearchIterative(arr, target) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		// Find the middle index
		const mid = Math.floor((left + right) / 2);

		// Check if the target is present at mid
		if (arr[mid] === target) {
			return mid; // Target found at index 'mid'
		}

		// If the target is greater, ignore the left half
		if (arr[mid] < target) {
			left = mid + 1;
		}
		// If the target is smaller, ignore the right half
		else {
			right = mid - 1;
		}
	}

	// Target is not present in the array
	return -1;
}

// Explanation Iterative version:

// Initialization of left and right:

// left is initialized to 0, which is the starting index of the array.
// right is initialized to arr.length - 1, which is the index of
// the last element in the array.

// Looping:

// The while loop continues as long as left is less than or equal to right.
// This condition ensures that there is still a part of the array to search.

// Finding the Middle Index:

// const mid = Math.floor((left + right) / 2);
// The middle index is calculated by taking the average of left and right
// and using Math.floor() to ensure it is an integer.

// Comparison:

// If the element at mid equals the target (arr[mid] === target),
// the function returns mid, which is the index of the target value.

// If the target value is greater than arr[mid], it means the target
// is in the right half of the array. Therefore, left is updated to mid + 1.

// If the target value is smaller than arr[mid], it means the target
// is in the left half of the array. Therefore, right is updated to mid - 1.

// Return:

// If the loop ends and no element is found, the function returns -1,
// indicating the target is not present in the array.
//-----------------------------------------------------------------------------------

function binarySearchRecursive(arr, target, left, right) {
	if (left > right) {
		return -1; // Base case: Target not found
	}

	const mid = Math.floor((left + right) / 2);

	if (arr[mid] === target) {
		return mid; // Target found at index 'mid'
	} else if (arr[mid] < target) {
		// Recursively search the right half
		return binarySearchRecursive(arr, target, mid + 1, right);
	} else {
		// Recursively search the left half
		return binarySearchRecursive(arr, target, left, mid - 1);
	}
}

// Explanation of Recursive Version:

// Base Case: If left becomes greater than right, the search ends, and -1 is returned,
// indicating the target is not found.

// Middle Element Check: Similar to the iterative version, if arr[mid] matches the target,
// return the mid index.

// Recursive Calls:

// If the target is larger than the middle element, recursively search the right half
// by updating left to mid + 1.

// If the target is smaller, recursively search the left half by updating right to mid - 1.
//-----------------------------------------------------------------------------------

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValueIterative = 7;
const targetValueRecursive = 8;
const resultIterative = binarySearchIterative(
	sortedArray,
	targetValueIterative
);
const resultRecursive = binarySearchRecursive(
	sortedArray,
	targetValueRecursive,
	0,
	sortedArray.length - 1
);

console.log(`resultIterative: ${resultIterative}`); // Output: 6 (index of target 7 in the array)
console.log(`resultRecursive: ${resultRecursive}`); // Output: 7 (index of target 8 in the array)
