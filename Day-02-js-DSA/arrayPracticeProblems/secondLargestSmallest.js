// Function to generate a random 3-digit number
function getRandomNumber() {
    return Math.floor(Math.random() * 900) + 100; // Generates number between 100-999
}

// Function to find 2nd largest and 2nd smallest without sorting
function findSecondLargestAndSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        // Finding largest and second largest
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        // Finding smallest and second smallest
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return { secondLargest, secondSmallest };
}

// Generate an array of 10 random numbers
let numbers = Array.from({ length: 10 }, getRandomNumber);
console.log("Generated numbers:", numbers);

// Find second largest and second smallest
let { secondLargest, secondSmallest } = findSecondLargestAndSmallest(numbers);

console.log("Second Largest:", secondLargest);
console.log("Second Smallest:", secondSmallest);
