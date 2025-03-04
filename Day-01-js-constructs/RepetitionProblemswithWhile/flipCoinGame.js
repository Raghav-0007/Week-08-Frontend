// Function to simulate a coin flip game until one wins 11 times
function flipCoinGame() {
    let headsCount = 0;
    let tailsCount = 0;

    while (headsCount < 11 && tailsCount < 11) {
        let flip = Math.random() < 0.5 ? "Heads" : "Tails"; // 50-50 chance

        if (flip === "Heads") {
            headsCount++;
        } else {
            tailsCount++;
        }

        console.log(`Flip: ${flip} | Heads: ${headsCount}, Tails: ${tailsCount}`);
    }

    console.log(`\nWinner: ${headsCount === 11 ? "Heads" : "Tails"}!`);
}

// Start the game
flipCoinGame();
