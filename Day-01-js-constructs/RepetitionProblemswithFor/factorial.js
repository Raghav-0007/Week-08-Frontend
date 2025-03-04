// Get the number 'n' from command-line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Please provide a number.");
    process.exit(1);
}

let n = parseInt(args[0], 10);

if (isNaN(n) || n < 0) {
    console.log("Invalid input! Please enter a non-negative integer.");
    process.exit(1);
}

// Function to calculate factorial
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

// Print the result
console.log(`${n}! = ${factorial(n)}`);
