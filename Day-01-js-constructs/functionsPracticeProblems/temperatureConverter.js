const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert temperature
function convertTemperature() {
    console.log("Temperature Conversion Menu:");
    console.log("1. Celsius to Fahrenheit");
    console.log("2. Fahrenheit to Celsius");

    rl.question("Enter your choice (1 or 2): ", (choice) => {
        if (choice === "1") {
            rl.question("Enter temperature in Celsius (0°C - 100°C): ", (tempC) => {
                tempC = parseFloat(tempC);
                if (tempC >= 0 && tempC <= 100) {
                    let degF = (tempC * 9 / 5) + 32;
                    console.log(`Temperature in Fahrenheit: ${degF.toFixed(2)}°F`);
                } else {
                    console.log("Invalid input! Enter a temperature between 0°C and 100°C.");
                }
                rl.close();
            });

        } else if (choice === "2") {
            rl.question("Enter temperature in Fahrenheit (32°F - 212°F): ", (tempF) => {
                tempF = parseFloat(tempF);
                if (tempF >= 32 && tempF <= 212) {
                    let degC = (tempF - 32) * 5 / 9;
                    console.log(`Temperature in Celsius: ${degC.toFixed(2)}°C`);
                } else {
                    console.log("Invalid input! Enter a temperature between 32°F and 212°F.");
                }
                rl.close();
            });

        } else {
            console.log("Invalid choice! Please enter 1 or 2.");
            rl.close();
        }
    });
}

// Start the conversion
convertTemperature();
