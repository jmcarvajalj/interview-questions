# JavaScript

### ECMAScript vs JavaScript

ECMAScript

-   Definition: ECMAScript is a scripting language specification that was created to standardize JavaScript.
-   Purpose: It provides the rules that developers should follow to implement JavaScript. It defines the core features of the language.
-   Versioning: ECMAScript is versioned. For example, ECMAScript 6 (also known as ES6) introduced significant enhancements and new features to the language.
-   Standardization: ECMAScript is maintained by ECMA International, a standards organization. The specification is regularly updated to improve and evolve the language.

JavaScript

-   Definition: JavaScript is an implementation of the ECMAScript specification. In other words, JavaScript is a programming language that conforms to the ECMAScript standard.
-   Scope: While ECMAScript sets the standard, JavaScript goes beyond the standard to include additional features and capabilities. It often encompasses things like the Document Object Model (DOM) for web browsers or APIs for server-side development.
-   Usage: When people refer to JavaScript, they are usually referring to the actual programming language in action, whether it's running in a web browser, on a server, or elsewhere.

In summary, ECMAScript is the standard, and JavaScript is one of the many implementations of that standard. Other languages, like JScript and ActionScript, also adhere to the ECMAScript specification. The distinction is important because it allows for multiple implementations of ECMAScript, fostering compatibility and interoperability between different environments.

## Event Loop in JavaScript

The **Event Loop** is a fundamental part of JavaScript's concurrency model. It allows JavaScript to perform non-blocking operations, even though JavaScript is single-threaded. The Event Loop manages the execution of multiple chunks of your program's code, handling asynchronous events and operations.

### How Does the Event Loop Work?

In JavaScript, there are two main types of queues that manage the order in which tasks are executed:

-   **Call Stack**: This is where all the currently executing functions are stored.
-   **Event Queue (Task Queue)**: This queue holds tasks that need to be executed, such as I/O events, timeouts, etc.

Here’s how the Event Loop works step by step:

1. **Execute Synchronous Code**: JavaScript starts by executing any synchronous code (code in the call stack). This includes functions, loops, and assignments that don’t involve any asynchronous operations.
2. **Handle Asynchronous Code**:

    - When an asynchronous operation (like a `setTimeout`, HTTP request, or file read) is encountered, it is sent to the appropriate queue (e.g., the **callback queue** or **microtask queue**).
    - The operation is not executed immediately but is scheduled for future execution after the synchronous code has been processed.

3. **Check the Event Queue**:

    - Once the **call stack** is empty, the **Event Loop** checks if there are any tasks in the **event queue** (task queue). If there are, it moves the task to the call stack and executes it.
    - Tasks in the event queue are processed in a first-in, first-out (FIFO) order.

4. **Microtasks**:

    - After executing a task from the event queue, the Event Loop checks the **microtask queue** for any pending microtasks.
    - Microtasks include promises' `.then()`, `.catch()`, and `.finally()` callbacks, and are given higher priority than regular tasks.
    - The **microtask queue** is processed before the Event Loop moves to the next event loop cycle.

5. **Repeat**: This cycle continues as long as there are tasks in either the event or microtask queue.

### Example of Event Loop

```javascript
console.log("Start");

setTimeout(() => {
	console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
	console.log("Promise");
});

fetch("https://jsonplaceholder.typicode.com/todos/1")
	.then((response) => response.json())
	.then((data) => {
		console.log("Fetch:", data);
	});

console.log("End");
```

result

```bash
Start
End
Promise
Timeout
Fetch: { ... }
```

### == vs ===

== (Equality Operator):

The == operator is used for equality comparison.

It performs type coercion, which means it converts the operands to the same type before making the comparison.

For example, if you compare a string and a number using ==, JavaScript will try to convert one or both operands to the same type before making the comparison.

This can sometimes lead to unexpected results, especially if you're not careful with the types of the operands.

```javascript
"5" == 5; // true, because "5" is converted to a number before comparison
```

=== (Strict Equality Operator):

The === operator is also used for equality comparison, but it does not perform type coercion.

It checks both the value and the type of the operands. The values must be of the same type, and the values must be identical.

```javascript
"5" === 5; // false, because the types are different
```

Example of unexpected behavior:

When using ==, you can encounter some unexpected comparisons, especially with null and undefined:

```javascript
console.log(null == undefined); // true (because they are considered loosely equal)
console.log(null === undefined); // false (different types)
```

Using === is generally considered good practice because it avoids the pitfalls of type coercion and leads to more predictable and safer code.

### Types of variables in JS and their differences

const: you cannot reassign values initialized with const. However, note that for objects and arrays declared with const, the reference to the object or array is constant, but the internal properties or elements can still be modified.

```javascript
const arr = [1, 2, 3];
arr.push(4); // This works, as the array itself isn't reassigned.

arr = [5, 6]; // Error: Assignment to constant variable.
```

let: you can reassign values initialized with let, let is block scoped.

```javascript
if (true) {
	let a = 1;
}

/* this will throw an error since outside of the scope of the if, a is not defined */
console.log(a);
```

var: you can reassign values initialized with var, var is not block scoped. It's function scoped.

```javascript
if (true) {
	var a = 1;
}

/* this will log the value 1 due to hoisting */
console.log(a);
```

here's an example where var is not accesible

```javascript
function myFunction() {
	var x = 10;
	console.log(x); // This will print 10 inside the function
}

myFunction();

console.log(x); // This will cause an error: x is not defined (because var is function-scoped)
```

Here's and example that uses them all

```javascript
function example() {
	if (true) {
		var x = 1; // function-scoped
		let y = 2; // block-scoped
		const z = 3; // block-scoped and cannot be reassigned

		console.log(x); // 1
		console.log(y); // 2
		console.log(z); // 3
	}

	console.log(x); // 1 (accessible because of var)
	console.log(y); // Error: y is not defined (block-scoped)
	console.log(z); // Error: z is not defined (block-scoped)
}

console.log(x); //Error: x is not defined (function-scoped)
```

### What is hoisting and why does it exist?

Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

Hoisting is often considered a feature of var declarations as well, although in a different way. In colloquial terms, any of the following behaviors may be regarded as hoisting:

-   Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")

-   Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")

-   The declaration of the variable causes behavior changes in its scope before the line in which it is declared.

-   The side effects of a declaration are produced before evaluating the rest of the code that contains it.

### Difference between class and object

A class is a blueprint for declaring and creating objects. An object is a class instance that allows programmers to use variables and methods from inside the class. Memory is not allocated to classes. Classes have no physical existence.

### What is the **_this_** keyword, and when do we use it?

In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

-   In an object method, this refers to the object.

-   Alone, this refers to the global object.

-   In a function, this refers to the global object.

-   In a function, in strict mode, this is undefined.

-   In an event, this refers to the element that received the event.

-   Methods like call(), apply(), and bind() can refer this to any object.

### Difference between normal function and arrow function

An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

-   Arrow functions don't have their own bindings to **this**, **arguments**, or **super**, and should not be used as methods.
-   Arrow functions cannot be used as constructors. Calling them with **new** throws a TypeError. They also don't have access to the **new.target** keyword.

-   Arrow functions cannot use **yield** within their body and cannot be created as generator functions.

### What is a Promise?

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It serves as a placeholder for a value that is not available yet but will be at some point in the future.

Promises are used to handle asynchronous operations more cleanly compared to traditional callbacks, reducing the risk of "callback hell."

It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

-   **pending:** initial state, neither fulfilled nor rejected.

-   **fulfilled:** meaning that the operation was completed successfully.

-   **rejected:** meaning that the operation failed.

### Creating a Promise

A promise is created using the Promise constructor, which takes a function called the executor. The executor function has two parameters: resolve and reject. These are functions that you call to indicate the success or failure of the asynchronous task.

```javascript
const myPromise = new Promise((resolve, reject) => {
	let isSuccess = true;

	if (isSuccess) {
		resolve("Operation succeeded"); // Fulfill the promise
	} else {
		reject("Operation failed"); // Reject the promise
	}
});
```

### Handling a Promise

To handle the result of a promise, you can use the following methods:

-   .then(): Used to handle the fulfilled state (success).
-   .catch(): Used to handle the rejected state (failure).
-   .finally(): Used to execute code after the promise settles, whether it's fulfilled or rejected.

```javascript
	.then((result) => {
		console.log(result); // 'Operation succeeded'
	})
	.catch((error) => {
		console.log(error); // If it fails, this will log the error
	})
	.finally(() => {
		console.log("Promise settled");
	});
```

## Promise Methods

### Promise.resolve()

Creates a promise that is resolved with the given value immediately. It’s useful when you want to create a promise that’s already in the fulfilled state.

```javascript
const resolvedPromise = Promise.resolve("Immediate Success");

resolvedPromise.then((value) => {
	console.log(value); // 'Immediate Success'
});
```

### Promise.reject()

Creates a promise that is rejected with the given reason immediately. It’s useful for simulating errors.

```javascript
const rejectedPromise = Promise.reject("Immediate Failure");

rejectedPromise.catch((error) => {
	console.log(error); // 'Immediate Failure'
});
```

### Promise.all()

Takes an array of promises and returns a single promise that:

Resolves when all of the promises in the array have resolved.

Rejects if any of the promises reject (the rejection reason is the first one that occurs).

```javascript
const promise1 = Promise.resolve(10);
const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, 20));
const promise3 = new Promise((resolve, reject) =>
	setTimeout(reject, 500, "Error!")
);

Promise.all([promise1, promise2, promise3])
	.then((values) => {
		console.log(values); // This won't run because promise3 rejects
	})
	.catch((error) => {
		console.log(error); // 'Error!' (because promise3 rejected)
	});
```

### Promise.allSettled()

This method returns a promise that resolves after all of the promises have either resolved or rejected. Unlike Promise.all, it never rejects. Instead, it provides an array of results for each promise, indicating whether it was fulfilled or rejected.

```javascript
const promiseA = Promise.resolve(100);
const promiseB = Promise.reject("Failed B");
const promiseC = new Promise((resolve) =>
	setTimeout(resolve, 1000, "Success C")
);

Promise.allSettled([promiseA, promiseB, promiseC]).then((results) => {
	console.log(results);
	// Output:
	// [
	//   { status: 'fulfilled', value: 100 },
	//   { status: 'rejected', reason: 'Failed B' },
	//   { status: 'fulfilled', value: 'Success C' }
	// ]
});
```

### Promise.race()

Returns a promise that resolves or rejects as soon as the first promise in the array resolves or rejects. The outcome is the result or error of the first settled promise.

```javascript
const slowPromise = new Promise((resolve) =>
	setTimeout(resolve, 2000, "Slow Promise")
);
const fastPromise = new Promise((resolve) =>
	setTimeout(resolve, 500, "Fast Promise")
);

Promise.race([slowPromise, fastPromise]).then((result) => {
	console.log(result); // 'Fast Promise' (because it resolved first)
});
```

### Promise.any()

This method returns a single promise that resolves as soon as any of the promises resolve. If all promises reject, it rejects with an AggregateError, which contains all the rejection reasons.

```javascript
const promiseX = Promise.reject("Failure X");
const promiseY = new Promise((resolve) =>
	setTimeout(resolve, 100, "Success Y")
);
const promiseZ = Promise.reject("Failure Z");

Promise.any([promiseX, promiseY, promiseZ])
	.then((value) => {
		console.log(value); // 'Success Y' (first resolved promise)
	})
	.catch((error) => {
		console.log(error); // If all fail, it throws an AggregateError
	});
```

## Real-World Example: Fetch API with Promises

One common use of Promises is when fetching data from an API. The fetch() function returns a promise, which you can handle with .then() and .catch().

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
	.then((response) => response.json()) // Parse the JSON from the response
	.then((data) => {
		console.log(data); // Handle the fetched data
	})
	.catch((error) => {
		console.error("Error fetching data:", error); // Handle errors
	});
```

## Async/Await

async/await is modern syntax built on top of Promises and offers a cleaner way to handle asynchronous operations. It makes the code look more like synchronous code.

```javascript
async function fetchData() {
	try {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/todos/1"
		);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

fetchData();
```

## Callback Functions and Asynchronous Programming

Before Promises were introduced in ES6 (ES2015), asynchronous operations in JavaScript were primarily handled using callback functions. This was a common pattern, but it often led to what’s known as "callback hell" or "pyramid of doom", where nested callbacks became difficult to manage and maintain.

In the callback pattern, you pass a function (the callback) as an argument to another function. That function is executed after the asynchronous task completes. This worked well for simple cases but became hard to read and maintain as complexity increased, especially when multiple asynchronous tasks were involved.

Example of Callback Hell
Here’s an example of a typical callback-based structure before Promises existed:

```javascript
function getData(callback) {
	setTimeout(() => {
		callback(null, "First Data");
	}, 1000);
}

function processData(data, callback) {
	setTimeout(() => {
		callback(null, `${data} Processed`);
	}, 1000);
}

function saveData(processedData, callback) {
	setTimeout(() => {
		callback(null, `${processedData} Saved`);
	}, 1000);
}

// Using callbacks (callback hell example)
getData((error, data) => {
	if (error) {
		console.error("Error fetching data:", error);
	} else {
		processData(data, (error, processedData) => {
			if (error) {
				console.error("Error processing data:", error);
			} else {
				saveData(processedData, (error, result) => {
					if (error) {
						console.error("Error saving data:", error);
					} else {
						console.log(result); // "First Data Processed Saved"
					}
				});
			}
		});
	}
});
```

#### Problems with Callbacks:

-   Nested Structure (Callback Hell): As you can see from the code above, each asynchronous operation depends on the previous one, leading to deeply nested code that becomes hard to read and maintain.

-   Error Handling: Error handling with callbacks is repetitive. You have to check for errors in every callback, leading to duplicated error-handling code.

-   Inversion of Control: With callbacks, control of the flow is passed around between functions, making it harder to follow the logic and predict execution flow.

#### Transition to Promises

Promises were introduced to address these issues. They allow chaining of asynchronous operations with .then(), making the code more readable and manageable. Promises also centralize error handling with .catch().

Here’s how the same example would look using Promises:

```javascript
function getData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve("First Data"), 1000);
	});
}

function processData(data) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(`${data} Processed`), 1000);
	});
}

function saveData(processedData) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(`${processedData} Saved`), 1000);
	});
}

// Using Promises to chain async operations
getData()
	.then(processData)
	.then(saveData)
	.then((result) => {
		console.log(result); // "First Data Processed Saved"
	})
	.catch((error) => {
		console.error("Error:", error);
	});
```

#### Using Async/Await

```javascript
function getData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve("First Data"), 1000);
	});
}

function processData(data) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(`${data} Processed`), 1000);
	});
}

function saveData(processedData) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(`${processedData} Saved`), 1000);
	});
}

// Using async/await for chaining async operations
async function handleData() {
	try {
		const data = await getData();
		const processedData = await processData(data);
		const result = await saveData(processedData);
		console.log(result); // "First Data Processed Saved"
	} catch (error) {
		console.error("Error:", error);
	}
}

handleData();
```

# Arrays

### Creating arrays

You can create an array using square brackets [] and filling it with values:

```javascript
// Creating an empty array
let emptyArray = [];

// Creating an array with values
let fruits = ["apple", "orange", "banana"];
```

### Accessing Array Elements

You can access elements in an array using square bracket notation. Keep in mind that array indices start at 0.

```javascript
let fruits = ["apple", "orange", "banana"];

console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'orange'
console.log(fruits[2]); // Output: 'banana'
```

### Modifying Array Elements

You can modify the values of array elements by assigning new values to specific indices.

```javascript
let fruits = ["apple", "orange", "banana"];

fruits[1] = "grape";
console.log(fruits); // Output: ['apple', 'grape', 'banana']
```

## Destructuring arrays

Destructuring allows you to extract values from arrays into distinct variables. It's a more concise and readable way to access individual elements or properties.

```javascript
const a = [1, 2];
const [first, second] = a;

console.log(first); // 1
console.log(second); // 2
```

An extra points:

-   Default Values: You can assign default values during destructuring

```javascript
const [first = 5, second = 10] = a;
```

## Array Methods

JavaScript provides various built-in methods for working with arrays. Here are a few common ones:

### push()

Adds one or more elements to the end of an array.

```javascript
let fruits = ["apple", "orange", "banana"];
fruits.push("kiwi");
console.log(fruits); // Output: ['apple', 'orange', 'banana', 'kiwi']
```

### pop()

Removes the last element from an array.

```javascript
let fruits = ["apple", "orange", "banana"];
fruits.pop();
console.log(fruits); // Output: ['apple', 'orange']
```

### shift()

Removes the first element from an array.

```javascript
let fruits = ["apple", "orange", "banana"];
fruits.shift();
console.log(fruits); // Output: ['orange', 'banana']
```

### unshift()

Adds one or more elements to the beginning of an array.

```javascript
let fruits = ["apple", "orange", "banana"];
fruits.unshift("kiwi");
console.log(fruits); // Output: ['kiwi', 'apple', 'orange', 'banana']
```

### indexOf()

Returns the index of the first occurrence of a specified element.

```javascript
let fruits = ["apple", "orange", "banana"];
console.log(fruits.indexOf("orange")); // Output: 1
```

### slice(start, end)

Description: Returns a shallow copy of a portion of an array.

Parameters:

-   start (optional): The beginning index (inclusive) to start extracting elements. If omitted, it starts from the beginning of the array.
-   end (optional): The end index (exclusive) to stop extracting elements. If omitted, it extracts up to the end of the array.

```javascript
const fruits = ["apple", "banana", "cherry", "date"];
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ['banana', 'cherry']
```

### splice(start, deleteCount, item1, item2, ...)

Description: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

Parameters:

-   start: The index at which to start changing the array.
-   deleteCount: The number of elements to remove.
-   item1, item2, ... (optional): Elements to add to the array, starting from the start index.

```javascript
const fruits = ["apple", "banana", "cherry", "date"];
fruits.splice(1, 2, "orange", "grape");
console.log(fruits); // Output: ['apple', 'orange', 'grape', 'date']
```

### split(separator, limit)

Description: Splits a string into an array of substrings based on a specified separator.

Parameters:

-   separator: Specifies the character or characters to use for separating the string.
-   limit (optional): An integer that specifies the number of splits. The remaining part of the string is not included in the result.

```javascript
const sentence = "This is a sample sentence";
const words = sentence.split(" ");
console.log(words); // Output: ['This', 'is', 'a', 'sample', 'sentence']
```

### join(separator)

Description: Joins all elements of an array into a string, separated by the specified separator.

Parameters:

-   separator (optional): Specifies a string to separate each element of the array. If omitted, the array elements are joined with a comma.

```javascript
const words = ["This", "is", "a", "sample", "sentence"];
const sentence = words.join(" ");
console.log(sentence); // Output: 'This is a sample sentence'
```

### concat(array1, array2, ...)

Description: Combines two or more arrays, returning a new array without modifying the original arrays.

Parameters:

-   array1, array2, ...: Arrays to concatenate with the original array.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
```

### sort(compareFunction)

Description: Sorts the elements of an array in place.

Parameters:

-   compareFunction (optional): A function that defines the sort order. If omitted, the array is sorted lexicographically (alphabetically/numerically).

```javascript
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 10];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9, 10]
```

### filter(callback)

Description: Creates a new array with all elements that pass the test implemented by the provided function.

Parameters:

-   callback: A function that is called for each element in the array. The elements that pass the test are included in the new array.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8]
```

### map(callback)

Description: Creates a new array with the results of calling a provided function on every element in the array.

Parameters:

-   callback: A function that is called once for each element in the array.

```javascript
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

### reduce(callback, initialValue)

Description: Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

Parameters:

-   callback: A function that is called for each element in the array, taking four arguments: accumulator, current value, current index, and the array itself.
-   initialValue (optional): The initial value of the accumulator. If omitted, the first element of the array is used as the initial accumulator value.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15
```

# Strings

Strings are used to represent text and are a sequence of characters. Strings can be created using single quotes (') or double quotes (").

### Creating Strings

You can create strings using single or double quotes. Both are equivalent, and you can use them interchangeably.

```javascript
//let singleQuotedString = 'Hello, World!';
//let doubleQuotedString = "Hello, World!";
```

### String Concatenation

You can concatenate (combine) strings using the + operator.

```javascript
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Outputs: John Doe
```

### String Length

The length property is used to get the length of a string.

```javascript
let message = "Hello";
console.log(message.length); // Outputs: 5
```

### Accessing Characters

You can access individual characters in a string using square brackets [].

```javascript
let str = "JavaScript";
console.log(str[0]); // Outputs: J
console.log(str[4]); // Outputs: S
```

### Template Literals

Template literals (introduced in ECMAScript 6) allow you to embed expressions inside string literals.

```javascript
let name = "John";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Outputs: Hello, John!
```

## String methods

### charAt(index)

Returns the character at the specified index.

```javascript
let str = "Hello, World!";
console.log(str.charAt(0)); // Output: H
```

### indexOf(substring) and lastIndexOf(substring)

These methods return the index of the first and last occurrence of the specified substring, respectively. If the substring is not found, they return -1.

```javascript
let str = "Hello, World!";
console.log(str.indexOf("o")); // Output: 4
console.log(str.lastIndexOf("o")); // Output: 8
console.log(str.lastIndexOf("x")); // Output: -1
```

### slice(start, end)

Extracts a section of a string and returns it as a new string. The start parameter is the starting index, and the end parameter is optional and represents the ending index (exclusive).

```javascript
let str = "Hello, World!";
console.log(str.slice(0, 5)); // Output: Hello
```

### substring(start, end)

Similar to slice, but substring doesn't support negative indices.

```javascript
let str = "Hello, World!";
console.log(str.substring(7, 12)); // Output: World
```

### substr(start, length)

Returns the substring starting from the specified index with a specified length.

```javascript
let str = "Hello, World!";
console.log(str.substr(7, 5)); // Output: World
```

### toUpperCase() and toLowerCase()

Convert a string to uppercase or lowercase, respectively.

```javascript
let str = "Hello, World!";
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.toLowerCase()); // Output: hello, world!
```

### trim()

Removes whitespace from both ends of a string.

```javascript
let str = "   Hello, World!   ";
console.log(str.trim()); // Output: Hello, World!
```

### replace(searchValue, replaceValue)

Replaces a specified value with another value in a string.

```javascript
let str = "Hello, World!";
console.log(str.replace("World", "Universe")); // Output: Hello, Universe!
```

### split(separator)

Splits a string into an array of substrings based on a specified separator.

```javascript
let str = "apple,orange,banana";
let fruits = str.split(",");
console.log(fruits); // Output: ["apple", "orange", "banana"]
```

# Objects

### Creating Objects

You can create objects in JavaScript using two methods:

### Object Literal

```javascript
let person = {
	name: "John",
	age: 30,
	isStudent: false,
};
```

### Object Constructor

```javascript
let person = new Object();
person.name = "John";
person.age = 30;
person.isStudent = false;
```

### Accessing Properties

You can access the properties of an object using dot notation or square bracket notation

```javascript
console.log(person.name); // Output: John
console.log(person["age"]); // Output: 30
```

### Adding and Modifying Properties

You can add new properties to an object or modify existing ones

```javascript
person.job = "Developer";
person["age"] = 31;
```

### Deleting Properties

You can delete a property from an object using the delete keyword

```javascript
delete person.isStudent;
```

## Destructuring Objects

Destructuring allows you to extract values from objects into distinct variables. It's a more concise and readable way to access individual elements or properties.

```javascript
const b = {
	n1: 1,
	n2: 2,
};

const { n1, n2 } = b;

console.log(n1); // 1
console.log(n2); // 2
```

An extra point

-   You can rename variables when destructuring

```javascript
const { n1: numOne, n2: numTwo } = b;
console.log(numOne); // 1
console.log(numTwo); // 2
```

### Object Methods

Objects can also contain functions, known as methods

```javascript
let person = {
	name: "John",
	sayHello: function () {
		console.log("Hello!");
	},
};

person.sayHello(); // Output: Hello!
```

In modern JavaScript, you can use shorthand notation for defining methods:

```javascript
let person = {
	name: "John",
	sayHello() {
		console.log("Hello!");
	},
};

person.sayHello(); // Output: Hello!
```

### Object Iteration

You can loop through the properties of an object using for...in loop

```javascript
for (let key in person) {
	console.log(key + ": " + person[key]);
}
```

### Object Property Existence:

You can check if an object has a specific property using the in operator or the hasOwnProperty method

```javascript
console.log("age" in person); // Output: true
console.log(person.hasOwnProperty("job")); // Output: false
```

## Object Methods

```javascript
const person = {
	name: "John",
	age: 30,
	gender: "male",
};
```

### Object.keys()

Returns the keys of the object.

```javascript
const keys = Object.keys(person);
console.log(keys); // Output: ['name', 'age', 'gender']
```

### Object.values()

Returns the values of the object.

```javascript
const values = Object.values(person);
console.log(values); // Output: ['John', 31, 'male']
```

### Object.entries()

Returns the values of the object.

```javascript
const entries = Object.entries(person);
console.log(entries);
// Output: [['name', 'John'], ['age', 31], ['gender', 'male']]
```

### Object.hasOwnProperty()

Returns boolean if object has a property.

```javascript
if (person.hasOwnProperty("name")) {
	console.log("Object has property name");
}
```

### Object.assign()

Assign new properties to an object

```javascript
const details = { city: "New York", job: "Engineer" };
Object.assign(person, details);
// person is now { name: 'John', age: 31, gender: 'male', city: 'New York', job: 'Engineer' }
```

### Object.freeze()

Freezes an object.

```javascript
Object.freeze(person);
// This prevents any changes to the person object
```

# Closures

In JavaScript, a closure is a combination of a function and the lexical environment within which that function was declared. This lexical environment consists of the variables that were in scope at the time the closure was created. Closures allow a function to access and manipulate variables from its outer (enclosing) scope even after the outer function has finished execution.

Let's break down the concept of closures into key components:

-   Lexical Scope:
    Lexical scope means that the scope of a variable is determined by its position within the source code. In JavaScript, functions create their own scope, and they can access variables from their own scope and any scope that encloses them.

-   Functions as First-Class Citizens:
    In JavaScript, functions are treated as first-class citizens, which means they can be assigned to variables, passed as arguments to other functions, and returned as values from other functions.

Now, let's look at an example to illustrate closures:

```javascript
function outerFunction(x) {
	// Inner function defined inside the outer function
	function innerFunction(y) {
		return x + y; // innerFunction has access to the 'x' variable from its outer scope
	}

	return innerFunction; // Return the inner function (but don't invoke it)
}

// Create a closure by calling outerFunction with an argument
const closure = outerFunction(10);

// Use the closure to add 5 to the 'x' value from the outer scope
const result = closure(5);
console.log(result); // Output: 15
```

# Memoization

Memoization is an optimization technique used in computer programming to speed up the execution of functions by caching their results. The basic idea is to store the results of expensive function calls and return the cached result when the same inputs occur again. This can be particularly useful for recursive functions or functions with expensive computations.

In JavaScript, you can implement memoization using various approaches, but one common method is to use a memoization cache—a data structure that stores the results of function calls based on their inputs.

Here's a simple example of memoization in JavaScript using a memoization cache:

```javascript
function memoizedFibonacci(n, memo = {}) {
	if (n <= 1) {
		return n;
	}

	if (memo[n] !== undefined) {
		return memo[n];
	}

	memo[n] = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo);
	return memo[n];
}

// Example usage:
const result = memoizedFibonacci(5);
console.log(result); // Output: 5
```

# Classes

### Declaring a Class

You can declare a class using the class keyword. Here's a simple example of a Person class

```javascript
class Person {
	// Constructor method is called when a new instance is created
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	// Method to get the person's details
	getDetails() {
		return `${this.name} is ${this.age} years old.`;
	}
}
```

### Creating Instances

Once you've defined a class, you can create instances of it using the new keyword

```javascript
const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);
```

### Constructor Method

The constructor method is a special method that gets called when an object is instantiated from a class. It's used to set up initial properties of the object.

### Properties and Methods

Properties are variables that store data, and methods are functions associated with the class. In the example above, name and age are properties, and getDetails is a method.

### Inheritance

Classes in JavaScript support inheritance. You can use the extends keyword to create a subclass (a class that inherits from another class)

```javascript
class Student extends Person {
	constructor(name, age, grade) {
		// Call the parent class constructor using super()
		super(name, age);
		this.grade = grade;
	}

	// Override the getDetails method
	getDetails() {
		return `${this.name} is ${this.age} years old and is in grade ${this.grade}.`;
	}
}
```

### Static Methods

You can also define static methods on a class. Static methods are called on the class itself, not on instances of the class

```javascript
class Utility {
	static add(x, y) {
		return x + y;
	}
}

console.log(Utility.add(5, 3)); // Outputs: 8
```

### Abstract Methods

JavaScript doesn't have native support for abstract classes or interfaces like some other programming languages such as Java or TypeScript. However, you can achieve similar concepts using a combination of function prototypes, conventions, and documentation.

In JavaScript, you can emulate abstract methods by defining a method in the base class that throws an error if it is not overridden in a subclass. Here's an example

```javascript
class Animal {
	makeSound() {
		throw new Error("makeSound method must be implemented");
	}
}

class Dog extends Animal {
	makeSound() {
		return "Woof!";
	}
}

const dog = new Dog();
console.log(dog.makeSound()); // Outputs: Woof!
```

In this example, the Animal class has an abstract method makeSound(). The Dog class, which extends Animal, provides an implementation for the makeSound method.

### Interfaces

JavaScript does not have built-in support for interfaces, but you can achieve a similar effect by defining an object with methods that must be implemented by classes that "implement" the interface

```javascript
const AnimalInterface = {
	makeSound() {
		throw new Error("makeSound method must be implemented");
	},
	move() {
		throw new Error("move method must be implemented");
	},
};

class Dog implements AnimalInterface {
	makeSound() {
		return "Woof!";
	}

	move() {
		return "Running";
	}
}

const dog = new Dog();
console.log(dog.makeSound()); // Outputs: Woof!
console.log(dog.move()); // Outputs: Running
```

Here, AnimalInterface is an object with methods that must be implemented by classes that claim to implement the interface. The Dog class then implements both makeSound and move methods.

# Data types

JavaScript has several built-in data types that are used to represent different kinds of values. Understanding these data types is fundamental to programming in JavaScript. Here are the main data types in JavaScript

### Primitive Data Types

-   String: Represents a sequence of characters and is enclosed in backticks (\` \`), single (' ') or double quotes. For example: "Hello, World!".

-   Number: Represents numeric values. It can be an integer or a floating-point number. For example: 42 or 3.14.

-   Boolean: Represents either true or false.

-   Null: Represents the intentional absence of any object value. It is a special keyword indicating the absence of any object value.

-   Undefined: Represents an uninitialized variable or a variable that has been declared but not assigned a value.

-   Symbol: Introduced in ECMAScript 6, symbols are unique and immutable primitive values, often used as keys in objects.

### Object

Represents a collection of key-value pairs, where keys are strings or symbols, and values can be any data type, including other objects.

### Special Data Types

Function: A subtype of objects, functions are special because they can be called.

Array: A special type of object used to store ordered collections of values.

### Derived Data Types

Date: Represents a date and time.

RegExp (Regular Expression): Represents a pattern used for matching character combinations in strings.

```javascript
// Primitive data types
let str = "Hello";
let num = 42;
let bool = true;
let nul = null;
let undf = undefined;

// Object
let obj = { key: "value" };

// Function
function exampleFunction() {
	console.log("This is a function.");
}

// Array
let arr = [1, 2, 3];

// Date
let currentDate = new Date();

// Regular Expression
let regex = /pattern/;
```
