// Get the number 'n' from command-line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Please provide a number n.");
    process.exit(1); // Exit if no input is provided
}

let n = parseInt(args[0], 10);

if (isNaN(n) || n < 0) {
    console.log("Invalid input! Please enter a non-negative integer.");
    process.exit(1);
}

// Print the table of powers of 2 up to 2^n
console.log(`Powers of 2 up to 2^${n}:`);
for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
}
