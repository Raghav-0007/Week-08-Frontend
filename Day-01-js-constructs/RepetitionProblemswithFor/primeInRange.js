// Get the range start and end from command-line arguments
const args = process.argv.slice(2);

if (args.length < 2) {
    console.log("Please provide two numbers (start and end of range).");
    process.exit(1);
}

let start = parseInt(args[0], 10);
let end = parseInt(args[1], 10);

if (isNaN(start) || isNaN(end) || start < 2 || end < 2 || start > end) {
    console.log("Invalid input! Please enter two valid integers where start ≤ end and both ≥ 2.");
    process.exit(1);
}

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Find and print prime numbers in the given range
console.log(`Prime numbers between ${start} and ${end}:`);
for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
        console.log(num);
    }
}
