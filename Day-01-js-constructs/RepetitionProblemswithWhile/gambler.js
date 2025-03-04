function gamblerGame() {
    let money = 100; // Starting money
    const goal = 200; // Goal amount
    let bets = 0; // Number of bets made
    let wins = 0; // Number of wins

    while (money > 0 && money < goal) {
        bets++; // Increase bet count

        // Simulate a bet (50% win probability)
        if (Math.random() < 0.5) {
            money++; // Win ₹1
            wins++; // Increase win count
        } else {
            money--; // Lose ₹1
        }

        console.log(`Bet: ${bets}, Money: ₹${money}`);
    }

    console.log(`\nFinal Status: ${money === 200 ? "Goal Reached! 🎉" : "Broke! 💸"}`);
    console.log(`Total Bets: ${bets}`);
    console.log(`Total Wins: ${wins}`);
}

// Start the game
gamblerGame();
