// Get the year from command-line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Please provide a 4-digit year as an argument.");
    process.exit(1); // Exit if no argument is provided
}

let year = parseInt(args[0], 10);

// Function to check if a year is a leap year
function isLeapYear(year) {
    if (year < 1000 || year > 9999) {
        return "Invalid input! Please enter a 4-digit year.";
    }
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Print the result
console.log(isLeapYear(year) ? `${year} is a Leap Year.` : `${year} is not a Leap Year.`);
