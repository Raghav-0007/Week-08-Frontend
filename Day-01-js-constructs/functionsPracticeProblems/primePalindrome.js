const readline = require("readline");

// Create input interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

// Function to check if number and its palindrome are prime
function checkPrimeAndPalindrome(num) {
    if (isPrime(num)) {
        console.log(`${num} is a prime number.`);
        let palindrome = getPalindrome(num);
        console.log(`Palindrome of ${num} is ${palindrome}`);
        
        if (isPrime(palindrome)) {
            console.log(`Palindrome ${palindrome} is also a prime number! 🎉`);
        } else {
            console.log(`Palindrome ${palindrome} is NOT a prime number.`);
        }
    } else {
        console.log(`${num} is NOT a prime number.`);
    }
}

// Take user input
rl.question("Enter a number: ", (input) => {
    let num = parseInt(input, 10);
    if (!isNaN(num)) {
        checkPrimeAndPalindrome(num);
    } else {
        console.log("Invalid input! Please enter a valid number.");
    }
    rl.close();
});
