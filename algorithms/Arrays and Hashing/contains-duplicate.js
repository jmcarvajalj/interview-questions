function hasDuplicate(numbers) {
	// Create a new Set to store encountered numbers
	const numberSet = new Set();

	// Loop through each number in the input array
	for (const number of numbers) {
		// Check if the number already exists in the numberSet
		if (numberSet.has(number)) {
			// If the number is already in the set, it's a duplicate
			return true; // Return true indicating the presence of a duplicate
		}

		// If the number is not in the set, add it to the set
		numberSet.add(number);
	}

	// If the loop finishes without finding duplicates, return false
	return false; // No duplicates were found
}

// Test cases
const arrayWithDuplicates = [1, 2, 3, 4, 1];
const arrayWithNoDuplicates = [5, 6, 7, 8, 9];

console.log(hasDuplicate(arrayWithDuplicates)); // Output: true (contains duplicate)
console.log(hasDuplicate(arrayWithNoDuplicates)); // Output: false (no duplicates)
