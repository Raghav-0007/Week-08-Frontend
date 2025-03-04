// Function to find prime factors and store them in an array
function getPrimeFactors(n) {
    let factors = [];
    
    // Divide by 2 until n becomes odd
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }

    // Check for odd factors from 3 to sqrt(n)
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }

    // If n is still greater than 2, it's a prime number
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

// Example Usage
const n = 100; // Change this value to test with different numbers
const primeFactors = getPrimeFactors(n);
console.log(`Prime Factors of ${n}:`, primeFactors);
