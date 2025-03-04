const args = process.argv.slice(2); // Get command-line arguments

if (args.length < 2) {
    console.log("Please provide day and month as arguments.");
    process.exit(1);
}

let day = parseInt(args[0], 10);
let month = parseInt(args[1], 10);

function isBetweenMarch20AndJune20(day, month) {
    return (month === 3 && day >= 20) || 
           (month > 3 && month < 6) || 
           (month === 6 && day <= 20);
}

console.log(isBetweenMarch20AndJune20(day, month));
