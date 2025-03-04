// Function to roll a die (1-6)
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to simulate die rolls and track occurrences
function simulateDieRolls() {
    let rollCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    let maxRolls = 10;
    let reachedMax = false;

    while (!reachedMax) {
        let roll = rollDie();
        rollCounts[roll]++;

        // Stop when any number reaches 10 times
        if (rollCounts[roll] === maxRolls) {
            reachedMax = true;
        }
    }

    // Find min and max occurring numbers
    let maxNumber = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] > rollCounts[b] ? a : b);
    let minNumber = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] < rollCounts[b] ? a : b);

    console.log("Final Die Rolls Count:", rollCounts);
    console.log(`Number that appeared most times: ${maxNumber} (${rollCounts[maxNumber]} times)`);
    console.log(`Number that appeared least times: ${minNumber} (${rollCounts[minNumber]} times)`);
}

// Run the simulation
simulateDieRolls();
