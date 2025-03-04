
// function to generate random two digit value
function getRandom(){
    return Math.floor(Math.random()*90+10);
}

// function to add the numbers
function getSum(){
    let t=5;
    let sum=0;
    while(t--){
        sum+=getRandom();
    }
    return sum;
}

// print the value of sum
let value=getSum();
console.log(value);

// function to get the average of random numbers
function getAverage(){
    return value/5;
}

// print the value of average 
let average=getAverage();
console.log(average);