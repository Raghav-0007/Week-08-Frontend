const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Function to perform unit conversion
function convertLength(option, value) {
    switch (option) {
        case 1: // Feet to Inches
            return `${value} Feet = ${value * 12} Inches`;
        case 2: // Feet to Meters
            return `${value} Feet = ${(value * 0.3048).toFixed(4)} Meters`;
        case 3: // Inches to Feet
            return `${value} Inches = ${(value / 12).toFixed(4)} Feet`;
        case 4: // Meters to Feet
            return `${value} Meters = ${(value * 3.2808).toFixed(4)} Feet`;
        default:
            return "Invalid choice! Please enter a valid option (1-4).";
    }
}

// Display menu
console.log("Select Conversion:");
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");

// Take user input
let option = parseInt(prompt("Enter your choice (1-4): "));
let value = parseFloat(prompt("Enter the value to convert: "));

// Perform conversion and display result
console.log(convertLength(option, value));
