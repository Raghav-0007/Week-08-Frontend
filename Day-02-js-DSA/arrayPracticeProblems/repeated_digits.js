// Function to find repeated digit numbers in range 0-100
function findRepeatedDigitNumbers() {
    let repeatedNumbers = [];

    for (let i = 10; i < 100; i++) {
        let firstDigit = Math.floor(i / 10); // Extract first digit
        let secondDigit = i % 10;            // Extract second digit

        if (firstDigit === secondDigit) {
            repeatedNumbers.push(i);
        }
    }

    return repeatedNumbers;
}

// Example usage
let result = findRepeatedDigitNumbers();
console.log("Numbers with repeated digits:", result);
