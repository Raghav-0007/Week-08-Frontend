// Get the number 'n' from command-line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Please provide a number.");
    process.exit(1);
}

let n = parseInt(args[0], 10);

if (isNaN(n) || n < 2) {
    console.log("Invalid input! Please enter an integer greater than 1.");
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

// Print the result
console.log(`${n} is ${isPrime(n) ? "a Prime" : "not a Prime"} number.`);
