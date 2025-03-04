// Get the number from command-line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Please provide a number (1, 10, 100, 1000, etc.).");
    process.exit(1); // Exit if no input is provided
}

let number = parseInt(args[0], 10);

// Function to map numbers to place values
function getPlaceValue(num) {
    switch (num) {
        case 1: return "Unit";
        case 10: return "Ten";
        case 100: return "Hundred";
        case 1000: return "Thousand";
        case 10000: return "Ten Thousand";
        case 100000: return "Lakh";
        case 1000000: return "Ten Lakh";
        case 10000000: return "Crore";
        default: return "Invalid input! Please enter 1, 10, 100, 1000, etc.";
    }
}

// Print the result
console.log(getPlaceValue(number));
