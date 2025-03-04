// Get the number from command-line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Please provide a number (1-7) to get the corresponding weekday.");
    process.exit(1); // Exit if no input is provided
}

let number = parseInt(args[0], 10);

// Function to map numbers to weekdays
function getWeekday(num) {
    switch (num) {
        case 1: return "Sunday";
        case 2: return "Monday";
        case 3: return "Tuesday";
        case 4: return "Wednesday";
        case 5: return "Thursday";
        case 6: return "Friday";
        case 7: return "Saturday";
        default: return "Invalid input! Please enter a number between 1 and 7.";
    }
}

// Print the result
console.log(getWeekday(number));
