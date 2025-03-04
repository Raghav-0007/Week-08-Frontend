// function to generate random dice
function getDice(){
    return Math.floor(Math.random()*6+1);
}

// function to add two numbers
function add(a, b){
    return a+b;
}

// print the value
let value=add(getDice(),getDice());
console.log(value);