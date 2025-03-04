function generateRandomNumbers(count) {
    return Array.from({ length: count }, () => Math.floor(Math.random() * 900) + 100);
}

function findMinMax(numbers) {
    return {
        min: Math.min(...numbers),
        max: Math.max(...numbers)
    };
}

// Generate 5 random numbers
let randomNumbers = generateRandomNumbers(5);
let { min, max } = findMinMax(randomNumbers);

console.log("Generated Numbers:", randomNumbers);
console.log("Minimum Value:", min);
console.log("Maximum Value:", max);
