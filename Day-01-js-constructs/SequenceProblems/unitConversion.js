// Conversion Functions
function inchesToFeet(inches) {
    return inches / 12;
}

function feetToMeters(feet) {
    return feet * 0.3048;
}

function calculateAreaInAcres(lengthFeet, widthFeet, numberOfPlots) {
    let lengthMeters = feetToMeters(lengthFeet);
    let widthMeters = feetToMeters(widthFeet);
    let totalAreaMeters = lengthMeters * widthMeters * numberOfPlots;
    return totalAreaMeters / 4046.86; // Convert square meters to acres
}

// Example Usage
console.log("42 inches in feet:", inchesToFeet(42));
console.log("Rectangular plot in meters:", feetToMeters(60), "x", feetToMeters(40));
console.log("Area of 25 plots in acres:", calculateAreaInAcres(60, 40, 25));