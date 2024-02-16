// 10.Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// Author: [ABC]
// Date: 2024-01-27
// Description: This program calculates the factorial of a number.

function factorial(n: number): number {
    // Check if n is negative
    if (n < 0) {
        throw new Error('Cannot calculate factorial of negative number');
    }

    // Initialize the result to 1
    let result = 1;

    // Multiply the result by each number from 1 to n
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    // Return the result
    return result;
}

// Test the function
console.log(factorial(2));