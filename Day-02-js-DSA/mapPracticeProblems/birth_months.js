// Function to generate a random birth month (1-12)
function getRandomMonth() {
    return Math.floor(Math.random() * 12) + 1; // Generates month between 1-12
}

// Function to generate 50 individuals with random birth months
function generateBirthMonths() {
    let birthMonthMap = {};

    // Initialize map with empty arrays for each month
    for (let i = 1; i <= 12; i++) {
        birthMonthMap[i] = [];
    }

    // Generate 50 individuals with random months
    for (let i = 1; i <= 50; i++) {
        let month = getRandomMonth();
        birthMonthMap[month].push(`Person${i}`); // Store person ID in respective month
    }

    return birthMonthMap;
}

// Function to print individuals grouped by birth month
function printBirthMonths(birthMonthMap) {
    console.log("Individuals grouped by birth month:");
    for (let month in birthMonthMap) {
        if (birthMonthMap[month].length > 0) {
            console.log(`Month ${month}: ${birthMonthMap[month].join(", ")}`);
        }
    }
}

// Generate and print birth month distribution
let birthMonthMap = generateBirthMonths();
printBirthMonths(birthMonthMap);
