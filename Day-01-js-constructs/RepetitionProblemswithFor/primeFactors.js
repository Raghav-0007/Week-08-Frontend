// Get the number 'N' from command-line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Please provide a number.");
    process.exit(1);
}

let N = parseInt(args[0], 10);

if (isNaN(N) || N < 2) {
    console.log("Invalid input! Please enter an integer greater than 1.");
    process.exit(1);
}

// Function to compute prime factors efficiently
function primeFactors(num) {
    let factors = [];

    // Remove all factors of 2
    while (num % 2 === 0) {
        factors.push(2);
        num = num / 2;
    }

    // Check for odd factors from 3 onwards
    for (let i = 3; i * i <= num; i += 2) {
        while (num % i === 0) {
            factors.push(i);
            num = num / i;
        }
    }

    // If num is still a prime number > 2, add it
    if (num > 2) {
        factors.push(num);
    }

    return factors;
}

// Get and print the prime factors
console.log(`Prime factors of ${N}:`, primeFactors(N).join(", "));
