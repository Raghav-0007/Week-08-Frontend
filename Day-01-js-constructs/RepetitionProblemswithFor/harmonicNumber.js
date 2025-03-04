// Get the number 'n' from command-line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Please provide a number n.");
    process.exit(1);
}

let n = parseInt(args[0], 10);

if (isNaN(n) || n <= 0) {
    console.log("Invalid input! Please enter a positive integer.");
    process.exit(1);
}

// Calculate the nth harmonic number
let harmonicNumber = 0;
for (let i = 1; i <= n; i++) {
    harmonicNumber += 1 / i;
}

// Print the result
console.log(`The ${n}th Harmonic Number is: ${harmonicNumber.toFixed(4)}`);
